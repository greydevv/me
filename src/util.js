const awsUrl = (path) => {
  const baseUrl = `https://${process.env.NEXT_PUBLIC_S3_ORIGIN}`
  if (!!path) {
    return `${baseUrl}/${path}`
  }
  return baseUrl
}

export {
  awsUrl
}
