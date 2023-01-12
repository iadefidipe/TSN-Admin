/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"
const prodPath = isProd ? "/tsn-admin" : ""

const nextConfig = {
  reactStrictMode: true,
  basePath: prodPath,
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    domains: [
      `${process.env.S3_UPLOAD_BUCKET}.s3.amazonaws.com`,
      `${process.env.S3_UPLOAD_BUCKET}.s3.${process.env.S3_UPLOAD_REGION}.amazonaws.com`,
      "cdn.pixabay.com",
    ],
  },
  env: {
    linksPath: prodPath,
    deploymentPath: prodPath
  },
}

module.exports = nextConfig
