import Link from "next/link"
import BlogTags from "components/BlogTags"

export default function BlogPost({ slug, title, date, hook, tags }) {
  return (
    <Link href={ `/blog/${slug}` } >
      <div className="group cursor-pointer border border-red-10 p-6 transition-all ease-in-out duration-250 md:hover:pl-12 hover:bg-red-10">
        <div className="flex md:flex-col justify-between md:start-center mb-3">
          <p className="attribute group-hover:text-red transition-all ease-in-out duration-250">
            { date }
          </p>
          <h3>
            { title }
          </h3>
        </div>
        <p className="font-light max-w-xl mb-3">
          { hook }
        </p>
        { tags.length > 0 &&
          <div className="col-start-1 row-start-1 row-end-3 flex gap-x-2">
            <BlogTags tags={ tags } />
          </div>
        }
      </div>
    </Link>
  )
}
