import Default from "layouts/Default"
import { useQuery } from "@apollo/client"
import { useState, useEffect } from "react"
import client from "apollo"
import { WORK_QUERY } from "apollo/queries/work"

function WorkItem({ title, desc, tags, github }) {

  const githubCls = () => {
    const baseCls = "relative flex gap-x-2 pr-2 mb-0.5"
    if (!!github) {
      return `${baseCls} group`
    }
    return baseCls
  }
  
  return (
    <div className="w-full bg-light">
      <div className="flex flex-col">
        <p className="attribute tracking-wide">
          { tags.join(' • ') }
        </p>
      </div>
      <div className="flex">
        <div className={ githubCls() }>
          { !!github
            ? (
              <a
                className="flex gap-x-2 cursor-pointer block static z-[2] font-medium text-xl sm:text-2xl font-ibm-plex-sans"
                href={ `https://github.com/${github}` }
                target="_blank"
              >
                <img  
                  className="static z-[2] h-6 w-6 mt-[0.5] sm:mt-1"
                  src="github.svg"
                />
                
                { title }
              </a>
            )
            : (
              <h3 className="static z-[2] text-xl sm:text-2xl">
                { title }
              </h3>
            )
          }
          { !!github &&
            <div className="absolute z-[1] h-2.5 bg-red-10 bottom-1 transition-all duration-300 w-0 group-hover:w-full"/>
          }
        </div>
      </div>
      <p className="font-light max-w-lg">
        { desc }
      </p>
    </div>
  )
}

function Work({ error, projects, experience }) {
  const [ showExp, setShowExp ] = useState(false)
  const [ activeItems, setActiveItems ] = useState(projects)

  useEffect(() => {
    if (showExp) {
      setActiveItems(experience)
    } else {
      setActiveItems(projects)
    }
  }, [showExp])

  const getItems = () => {
    for (const item of Array.from(filterWorks.data.works)) {

    }
  }

  const getTabCls = (isActive) => {
    const baseCls = "text-left font-medium text-xl sm:text-2xl font-ibm-plex-sans z-[2]"
    if (isActive) {
      return `${baseCls} text-dark`
    }
    return `${baseCls} text-red-10`
  }

  return (
    <Default>
      <div className="flex flex-col gap-y-6 sm:gap-y-10 pb-40">
        <div className="flex items-center gap-x-2 sm:gap-x-4 text-center mx-auto md:mx-0">
          <div className="flex relative pl-5 h-8 sm:h-12">
            <button 
              className={ getTabCls(!showExp) }
              onClick={ () => setShowExp(false) }
              disabled={ !showExp }
            >
              PROJECTS
            </button>
            { !showExp &&
              <img
                src="proj_icon.svg"
                className="absolute left-2 -bottom-1 h-10 sm:h-12 z-[1]"
              />
            }
          </div>
          <div className="flex relative pl-5 h-12">
            <button
              className={ getTabCls(showExp) }
              onClick={ () => setShowExp(true) }
              disabled={ showExp }
            >
              EXPERIENCE
            </button>
            { showExp &&
              <img
                src="exp_icon.svg"
                className="absolute left-2 bottom-px h-10 sm:h-12 z-[1]"
              />
            }
          </div>
        </div>
        {activeItems.map(([year, items], i) => {
          return (
            <div key={ i } className="flex gap-x-4 sm:gap-x-6">
              <div className="border-r-2 border-red-10 w-7 sm:w-9">
                <h2 className="block transform text-red-10 rotate-180 writing-vert-rl text-xl sm:text-3xl">
                  { year }
                </h2>
              </div>
              <div className="flex flex-col gap-y-3 sm:gap-y-6 flex-1">
                {items.map((item, j) => {
                  return (
                    <WorkItem 
                      key={ j }
                      title={ item.title }
                      desc={ item.desc }
                      tags={ item.tags }
                      github={ item.github }
                    />
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </Default>
  )
}

export async function getServerSideProps() {
  const { error, data } = await client.query({
    query: WORK_QUERY,
  })

  const errors = []
  if (error) {
    error.graphQLErrors.forEach(({ message }) => {
      errors.push(message)
    })
  }

  const categoryCompare = (a, b) => {
    if (b[0] === "NOW" && Number.isInteger(a[0])) {
      return 1
    } else if (a[0] === "NOW" && Number.isInteger(b[0])) {
      return -1
    }
    // compare numerical categories (years), descending
    return a[0] < b[0]
  }

  const itemCompare = (a, b) => {
    if (a.interval.featured || b.interval.featured) {
      // always put featured items at top of category
      return 1
    }
    // otherwise, sort by the begin
    return a.interval.month_begin > b.interval.month_begin
  }

  const filterWorks = (f, works) => {
    let map = new Map()
    for (const work of works) {
      if (f(work)) {
        if (work.interval.featured || !!!work.interval.year_end) {
          const FEATURED_KEY = "NOW"
          if (map.has(FEATURED_KEY)) {
            map.set(FEATURED_KEY, [...map.get(FEATURED_KEY), work])
          } else {
            map.set(FEATURED_KEY, [work])
          }
        } else {
          const year_begin = work.interval.year_begin
          if (map.has(year_begin)) {
            map.set(year_begin, [...map.get(year_begin), work])
          } else {
            map.set(year_begin, [work])
          }
        }
      }
    }

    map.forEach((value, key) => {
      if (value.length > 1) {
        map.set(key, value.sort(itemCompare))
      }
    })

    return Array.from(map).sort().reverse()
  }

  const projects = errors.length === 0 ? filterWorks((e) => !e.isExperience, data.works) : []
  const experience = errors.length === 0 ? filterWorks((e) => e.isExperience, data.works) : []

  return {
    props: {
      errors: errors,
      projects: projects,
      experience: experience,
      works: []
    }
  }
}

export default Work
