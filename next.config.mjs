/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns: [
      {
        protocol: "https",
        hostname: "techxgrow-bucket.s3.eu-central-1.amazonaws.com",
      },
    ],
  }
};

export default nextConfig;
