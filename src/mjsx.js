import React from "react"
import NextLink from "next/link"
import MarkedReact from "marked-react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { ocean as HLJS_THEME } from "react-syntax-highlighter/dist/cjs/styles/hljs"
import { marked } from "marked"

const renderer = {
  code(code, lang, escaped) {
    return (
      <SyntaxHighlighter
        key={ this.elementId }
        language={ lang }
        PreTag={ Pre }
        style={ HLJS_THEME }
      >
        { code }
      </SyntaxHighlighter>
    )
  },
  codespan(code, lang) {
    return (
      <code>
        <span className="text-[#688CAD] text-base">
          { code }
        </span>
      </code>
    )
  },
  blockquote(quote) {
    return <Blockquote key={ this.elementId } body={ quote } />
  }
}

const Blockquote = ({ body }) => {
  return (
    <div className="rounded-sm grid grid-cols-[8px_1fr]">
      <div className="rounded-sm bg-red-10 h-full row-span-1 col-span-1 flex-1" />
      <div className="p-4 flex-2 col-start-2 col-end-3 font-dm-mono">
        {body.map((e, i) => {
          return (
            <React.Fragment key={ i }>{ e }</React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

const Pre = ({ children }) => {
  return (
    <pre className="p-2 sm:p-4 rounded-sm bg-dark text-red-10">
      { children }
    </pre>
  )
}

const Markdown = ({ children, rest }) => {
  return (
    <MarkedReact renderer={ renderer } { ...rest } breaks>
      { children }
    </MarkedReact>
  )
}

export default Markdown
export { renderer }
