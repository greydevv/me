import Default from "layouts/Default"
// import Link from "next/link"
// import { useRouter } from "next/router"
// import { useQuery } from "@apollo/client"
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

export default function BlogPostView() {
  // const router = useRouter()
  // const { slug } = router.query
  // const { loading, error, data } = useQuery(BLOG_POST_QUERY, {
  //   variables: {
  //     slug: slug,
  //     public: true,
  //   },
  //   errorPolicy: "all"
  // })
  //
  // return (
  //   <Default noNavbar>
  //     <Link href="/blog">{ "<-- BACK" }</Link>
  //     { loading
  //       ? (
  //         <></>
  //       )
  //       : (
  //         <>
  //           { !!data.blog
  //             ? (
  //               <>
  //                 <h1>{ data.blog.title }</h1>
  //                 <p>{ data.blog.body }</p>
  //               </>
  //             )
  //             : (
  //               <div>
  //                 404
  //               </div>
  //             )
  //           }
  //         </>
  //       )
  //     }
  //   </Default>
  )
  return <div>404!!</div>
}
