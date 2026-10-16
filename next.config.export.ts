import type { NextConfig } from "next";

// Static export configuration used exclusively for Netlify builds.
// The Netlify build command (see netlify.toml) copies this file over
// next.config.ts before running `next build`, so the exported site is
// always 100% static (HTML/CSS/JS + /public assets) with no server
// runtime required. This removes any manual step from the deploy flow.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
