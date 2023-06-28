const BlogTag = ({ text, small }) => {
  const tagCls = () => {
    const baseCls = "py-1 bg-dark"
    if (!!small) {
      return `px-2 text-sm font-base ${baseCls}`
    }
    return `px-4 ${baseCls}`
  }
  return (
    <div className={ tagCls() } >
      <p className="text-light tracking-widest font-ibm-plex-sans">
        { text.toUpperCase() }
      </p>
    </div>
  )
}

export default function BlogTags({ tags }) {
  return (
    <>
      { tags.map((tag, i) => {
        return (
          <BlogTag
            key={ i }
            text={ tag }
            small
          />
        )
      })}
    </>
  )
}
