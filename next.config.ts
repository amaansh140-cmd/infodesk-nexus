import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: process.env.NODE_ENV === 'development' ? '.next.nosync' : '.next',
};

export default nextConfig;
