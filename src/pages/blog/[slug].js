import Default from "layouts/Default"
import Link from "next/link"
import { BLOG_SLUG_QUERY } from "apollo/queries/blog"
import { formatDate } from "dateutil"
import client from "apollo"

function BlogPostView({ resolvedUrl, date, title, body }) {
  return (
    <div>
      <div className="w-full mb-4 sm:mb-8 px-10 md:px-32 pt-4 sm:pt-6 pb-7 sm:pb-24 bg-red-20">
        <div className="mb-4 sm:mb-8">
          <Link href="/blog">
            <a className="font-ibm-plex-sans text-grey text-sm sm:text-lg">
              { "<-- Back" }
            </a>
          </Link>
        </div>
        <p className="attribute text-sm sm:text-lg mb-1 sm:mb-2">
          { date }
        </p>
        <h1 className="text-4xl sm:text-6xl">
          { title }
        </h1>
      </div>
      <div className="px-10 md:px-32">
        <p>
          { body }
        </p>
      </div>
    </div>
  )
}

export async function getServerSideProps({ resolvedUrl }) {
  const slugRe = new RegExp("(?:/[a-z]+/)(.*)")
  const slug = resolvedUrl.match(slugRe)[1]
  const { error, data } = await client.query({
    query: BLOG_SLUG_QUERY,
    variables: {
      slug: slug,
      public: true
    }
  })

  const errors = []
  if (error) {
    error.graphQLErrors.forEach(({ message }) => {
      errors.push(message)
    })
  }

  const post = data.blog

  if (!!!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      date: formatDate(post.date),
      title: post.title,
      body: post.body,
    }
  }
}

export default BlogPostView
