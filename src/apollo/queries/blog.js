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

const BLOG_POST_QUERY = gql`
  query ($slug: String!, $public: Boolean!)  {
    blog (query: { slug: $slug, public: $public } ) {
      _id
      title
      body
      date
      public
      tags
    }
  }
`

export {
  BLOG_POSTS_QUERY,
  BLOG_POST_QUERY,
}
