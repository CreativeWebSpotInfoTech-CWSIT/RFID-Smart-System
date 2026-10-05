import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, 
  },
  typescript: {
    ignoreBuildErrors: true,
  },git commit -m "Remove basePath for Vercel deployment"

};

export default nextConfig;