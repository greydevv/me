import moment from "moment"
import client from "apollo"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import Default from "layouts/Default"
import Markdown from "mjsx"
import BlogTags from "components/BlogTags"
import { BLOG_POST_QUERY } from "apollo/queries/blog"

export default function BlogPostView({ blog }) {
  const blog_body = blog.body.replaceAll("\\n", "\n")
  let min_read = Math.round((blog_body.length / 2) / 200)
  if (min_read === 0) {
    min_read = 1
  }
  const formatDate = (date) => {
    return moment(date).format("MMM. DD, YYYY")
  }

  return (
    <Default navbarScrolls>
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 mt-2">
          <div className="flex">
            <Link href="/blog">
              <Image
                src="/icons/back_arrow.svg"
                height="13"
                width="26"
              />
            </Link>
          </div>
          <h1 className="text-5xl mt-4 mb-2">
            { blog.title }
          </h1>
          <p className="attribute tracking-wide">
            { formatDate(blog.date) } • { min_read } min. read
          </p>
          <div className="flex gap-x-2 mt-4">
            <BlogTags tags={ blog.tags } />
          </div>
        </div>
        <div className="flex flex-col gap-y-4 mb-20 leading-relaxed">
          <Markdown>
            { blog_body }
          </Markdown>
        </div>
      </div>
    </Default>
  )
}

export async function getServerSideProps({ params }) {
  const { error, data } = await client.query({
    query: BLOG_POST_QUERY,
    variables: {
      slug: params.slug,
      public: true,
    }
  })

  return {
    props: {
      blog: data.blog
    }
  }
}
