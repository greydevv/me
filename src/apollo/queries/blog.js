import gql from "graphql-tag"

const BLOG_POSTS_QUERY = gql`
  query ($public: Boolean!, $featured: Boolean!) {
    blogs (query: { public: $public, featured: $featured }) {
      _id
      slug
      title
      hook
      date
      tags
    }
  }
`

export {
  BLOG_POSTS_QUERY
}
