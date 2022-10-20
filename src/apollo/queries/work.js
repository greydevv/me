import gql from "graphql-tag"

const WORK_QUERY = gql`
  query {
    works {
      _id
      title
      github
      desc
      tags
      isExperience
      interval {
        year_begin
        year_end
        month_begin
        month_end
        featured
      }
    }
  }
`

export {
  WORK_QUERY
}
