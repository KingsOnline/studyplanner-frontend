/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  
  images: {
    unoptimized: true, // ✅ disables Image Optimization for static export
  },
  reactStrictMode: true,
};

export default nextConfig;
