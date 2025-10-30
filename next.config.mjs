/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ensures Next.js generates static HTML
  reactStrictMode: true,

  images: {
    unoptimized: true, // required for static exports
  },

  basePath: "/studyplanner-frontend",
  assetPrefix: "/studyplanner-frontend/",
};

export default nextConfig;