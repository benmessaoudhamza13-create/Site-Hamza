import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // L'ancienne section /macro est remplacée par /revue.
    return [
      { source: "/macro", destination: "/revue", permanent: true },
      { source: "/macro/:slug", destination: "/revue/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
