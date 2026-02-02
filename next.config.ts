import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
