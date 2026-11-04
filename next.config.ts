import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "nrs.harvard.edu",
            },
            {
                protocol: "https",
                hostname: "ids.lib.harvard.edu",
            },
        ],
    },

};

export default nextConfig;
