import Image from "next/image"
import Default from "layouts/Default"
import BoxGraphic from "components/BoxGraphic"
import { INTRO, ABOUT_ME } from "lookups"

export default function Home() {

  const contactCls = "h-5 w-5"

  return (
    <Default>
      <div className="flex flex-col gap-y-8 sm:gap-y-24 pb-20 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_300px] grid-rows-auto sm:grid-rows-1 gap-y-0 gap-x-0 sm:gap-x-8 mb-8">
          <div className="flex flex-col col-start-1 row-start-2 row-end-3 sm:row-start-1 sm:row-end-2 py-5">
            <h1 className="max-w-xl mb-4 sm:mb-8 text-3xl sm:text-4xl">
              I'm Greyson, an artist and computer science student.
            </h1>
            <p className="max-w-sm mb-4 font-light">
              { INTRO }
            </p>
            <div className="flex gap-x-4 sm:gap-x-2">
              <a href="https://www.linkedin.com/in/greyson-murray/" target="_blank">
                <Image
                  src="/icons/linkedin.svg"
                  className={ contactCls }
                  width="24"
                  height="24"
                />
              </a>
              <a href="https://github.com/greydevv" target="_blank">
                <Image
                  src="/icons/github.svg"
                  className={ contactCls }
                  width="24"
                  height="24"
                />
              </a>
              <a href="https://stackoverflow.com/users/12326283/gmdev" target="_blank">
                <Image
                  src="/icons/stackoverflow.svg"
                  className={ contactCls }
                  width="24"
                  height="24"
                />
              </a>
            </div>
          </div>
          <BoxGraphic className="col-start-1 sm:col-start-2 sm:row-start-1 mb-8 sm:mb-0 mr-8 sm:mr-0 aspect-[4/5]">
            <img src="" alt="me" className="w-full h-full object-cover" />
          </BoxGraphic>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[300px_1fr] grid-rows-auto sm:grid-rows-1 gap-y-0 gap-x-0 sm:gap-x-8 mb-8">
          <BoxGraphic left className="col-start-1 row-start-1 mb-8 sm:mb-8 ml-8 sm:ml-0 aspect-square">
            <img src="" alt="me" className="h-full w-full object-cover"/>
          </BoxGraphic>
          <div className="flex flex-col col-start-1 sm:col-start-2 py-5 row-start-2 sm:row-start-1">
            <h1 className="mb-4 sm:mb-8 text-3xl sm:text-4xl">
              About Me
            </h1>
            <div className="flex flex-col gap-y-4 max-w-sm font-light">
              { ABOUT_ME.map((content, i) => {
                return <p key={ i }>{ content }</p>
              })}
            </div>
          </div>
        </div>
      </div>
    </Default>
  )
}
