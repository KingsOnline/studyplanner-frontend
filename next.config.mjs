/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  
  images: {
    unoptimized: true, // ✅ disables Image Optimization for static export
  },
  reactStrictMode: true,
  basePath: '/studyplanner-frontend',
  assetPrefix: '/studyplanner-frontend/',
};

export default nextConfig;
