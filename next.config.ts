import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
   images: {
    unoptimized: true, 
  },

  
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
