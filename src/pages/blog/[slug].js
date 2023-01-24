import React from "react"
import Default from "layouts/Default"
import Link from "next/link"
import { useRouter } from "next/router"
import Markdown from "mjsx"

// import gql from "graphql-tag"
//
// const BLOG_POST_QUERY = gql`
//   query ($slug: String!, $public: Boolean!)  {
//     blog (query: { slug: $slug, public: $public } ) {
//       _id
//       title
//       body
//       date
//       public
//     }
//   }
// `

import { TEST_BLOG } from "lookups.js"

export default function BlogPostView() {
  const blog = TEST_BLOG

  // const blogJsx = marked.parse(blog.content.join("\n\n"))

          // {blogJsx.map((e, i) => {
          //   // if (typeof e === "string") {
          //   //   throw new Error(`Expected JSX element but found string: ${e}`)
          //   // }
          //   // return <React.Fragment key={ i }>{ e }</React.Fragment>
          //   // console.log(i)
          //   // console.log(e)
          //   return <React.Fragment key={ i }>{ e }</React.Fragment>
          //   // return <div key={ i }>{ e }</div>
          // })}
  return (
    <Default noNavbar>
      <div className="max-w-2xl mx-auto">
        {/* <Link href="/blog">{ "<-- BACK" }</Link> */}
        <h1 className="text-5xl mt-4 mb-20">{ blog.title }</h1>
        <div className="flex flex-col gap-y-4 mb-20">
          <Markdown>
            { blog.content.join("\n") }
          </Markdown>
        </div>
      </div>
    </Default>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      blogHtml: []
    }
  }
}
