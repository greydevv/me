import Default from "layouts/Default"
import { BlogPost, FeaturedBlogPost } from "components/BlogPost"
import { useQuery, useMutation } from "@apollo/client"
import { BLOG_POSTS_QUERY } from "apollo/queries/blog"
import client from "apollo"
import { formatDate } from "dateutil"

function Blog({ errors, featuredBlog, blogs }) {
  return (
    <Default>
      { !!!featuredBlog && blogs.length === 0 
        ? (
          <NoBlogs />
        )
        : (
          <>
            <div className="mb-16">
              <FeaturedBlogPost
                slug={ featuredBlog.slug }
                title={ featuredBlog.title }
                date={ formatDate(featuredBlog.date) }
                hook={ featuredBlog.hook }
                tags={ featuredBlog.tags }
              />
            </div>
            { blogs.length > 0 &&
              <div className="flex flex-col gap-y-8 pb-20">
                { blogs.map((blog, i) => {
                  return (
                    <BlogPost
                      key={ i }
                      slug={ blog.slug }
                      title={ blog.title }
                      date={ formatDate(blog.date) }
                      hook={ blog.hook }
                      tags={ blog.tags }
                    />
                  )
                })}
              </div>
            }
          </>
        )
      }
    </Default>
  )
}

function NoBlogs() {
  return (
    <div className="w-full flex flex-col justify-center items-center text-center">
      <h2 className="mb-2 font-ibm-plex-sans">
        Nothing yet!
      </h2>
      <p className="text-grey max-w-sm">
        Please check back frequently as I update my blog with posts about computer science, engineering, art, and anything else I find interesting...
      </p>
      <div className="my-8 w-[20%] border-grey-10 border"/>
      <img 
        className="text-red fill-red-10 h-20"
        src="signature.svg"
      />
    </div>
  )
}

export async function getServerSideProps() {
  // const { error: blogError, data: blogData } = await client.query({
  //   query: BLOG_POSTS_QUERY,
  //   variables: {
  //     public: true,
  //     featured: false,
  //   }
  // })
  //
  // const { error: featuredError, data: featuredData } = await client.query({
  //   query: BLOG_POSTS_QUERY,
  //   variables: {
  //     public: true,
  //     featured: true,
  //   }
  // })
  //
  // const errors = []
  // if (blogError) {
  //   console.log(blogError)
  //   blogError.graphQLErrors.forEach(({ message }) => {
  //     errors.push(message)
  //   })
  // }
  //
  // if (featuredError) {
  //   console.log(featuredError)
  //   featuredError.graphQLErrors.forEach(({ message }) => {
  //     errors.push(message)
  //   })
  // }
  //
  // const featuredBlog = errors.length === 0 ? featuredData.blogs[0] : []
  // const blogs = errors.length === 0 ? blogData.blogs : []

  return {
    props: {
      // errors: errors,
      // featuredBlog: featuredBlog,
      // blogs: blogs,
      errors: [],
      featuredBlog: null,
      blogs: [],
    }
  }
}

export default Blog
