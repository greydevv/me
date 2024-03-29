import Link from "next/link"
import Image from "next/image"
import BoxGraphic from "components/BoxGraphic"
import BlogTags from "components/BlogTags"
import { awsUrl } from "util.js"

export default function FeaturedBlogPost({ slug, title, date, hook, tags, imgSrc }) {
  return (
    <Link href={ `/blog/${slug}` }>
      <div className="cursor-pointer grid md:grid-cols-[1fr_300px] md:grid-rows-1 grid-cols-1 grid-rows-[300px_1fr] gap-x-8 gap-y-8 group">
        <div className="col-start-1 md:row-start-1 row-start-2 py-5 transition-all duration-250 md:group-hover:pl-4 md:px-0 px-6">
          <p className="attribute mb-2">
            { date }
          </p>
          <h2 className="mb-5 max-w-lg">
            { title }
          </h2>
          <p className="font-light max-w-sm mb-5">
            { hook }
          </p>
          { tags.length > 0 &&
            <div
              className="flex flex-wrap gap-2"
            >
              <BlogTags tags={ tags } />
            </div>
          }
        </div>
        <BoxGraphic
          className="md:col-start-2 row-start-1 col-start-1 md:aspect-square w-full md:h-auto h-full"
          extraBorderCls="transition-all duration-250 group-hover:left-2 group-hover:top-4"
          extraBackdropCls="transition-all duration-250 group-hover:left-4 group-hover:top-6"
        >
          <div className="relative h-full bg-dark aspect-square mx-auto">
            <Image
              src={ awsUrl(`blogs/${slug}.png`) }
              fill
            />
          </div>
        </BoxGraphic>
      </div>
    </Link>
  )
}
