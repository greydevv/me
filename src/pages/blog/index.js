import Default from "layouts/Default"
import { BlogPost, FeaturedBlogPost } from "components/BlogPost"
import { useQuery, useMutation } from "@apollo/client"
import moment from "moment"
import { BLOG_POSTS_QUERY } from "apollo/queries/blog"
import client from "apollo"

function Blog({ errors, featuredBlogs, blogs }) {

  const formatDate = (date) => {
    return moment(date).format("MMM. DD, YYYY")
  }
  return (
    <Default>
      { featuredBlogs.length === 0 && blogs.length === 0
        ? <NoBlogs />
        : (
          <>
            { featuredBlogs.length > 0 &&
              <div className="flex flex-col gap-y-16 mb-16">
                { featuredBlogs.map((blog, i) => {
                  return (
                    <FeaturedBlogPost
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
      <div className="relative mb-2">
        <h2 className="relative text-2xl sm:text-3xl font-ibm-plex-sans z-[1]">
          Nothing yet!
        </h2>
        <img
          src="empty_folder.svg"
          className="absolute -left-6 -bottom-1 h-10 sm:h-12"
        />
      </div>
      <p className="text-grey max-w-sm font-light">
        Please check back frequently as I update my blog with posts about computer science, engineering, art, and anything else I find interesting...
      </p>
      <div className="my-4 sm:my-8 w-[20%] border-grey-10 border"/>
      <img
        className="text-red fill-red-10 h-16 sm:h-20"
        src="signature.png"
      />
    </div>
  )
}

export async function getServerSideProps() {
  const { error: blogError, data: blogData } = await client.query({
    query: BLOG_POSTS_QUERY,
    variables: {
      public: true,
      featured: false,
    }
  })

  const { error: featuredError, data: featuredData } = await client.query({
    query: BLOG_POSTS_QUERY,
    variables: {
      public: true,
      featured: true,
    }
  })

  const errors = []
  if (blogError) {
    blogError.graphQLErrors.forEach(({ message }) => {
      errors.push(message)
    })
  }

  if (featuredError) {
    featuredError.graphQLErrors.forEach(({ message }) => {
      errors.push(message)
    })
  }

  const featuredBlog = errors.length === 0 ? featuredData.blogs : []
  const blogs = errors.length === 0 ? blogData.blogs : []

  return {
    props: {
      errors: errors,
      featuredBlogs: featuredBlog,
      blogs: blogs,
    }
  }
}

export default Blog
