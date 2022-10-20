import moment from "moment"

const formatDate = (date) => {
  return moment(date).format("MMM. DD, YYYY")
}

export {
  formatDate
}
