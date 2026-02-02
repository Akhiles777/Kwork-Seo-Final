import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
