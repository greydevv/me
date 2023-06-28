const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.S3_ORIGIN,
      }
    ]
  }
}

module.exports = nextConfig
