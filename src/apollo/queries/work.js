import gql from "graphql-tag"

const WORK_QUERY = gql`
  query {
    works {
      _id
      title
      github
      site
      logo
      desc
      tags
      isExperience
      priority
      interval {
        year_begin
        year_end
        month_begin
        month_end
      }
    }
  }
`

export {
  WORK_QUERY
}
