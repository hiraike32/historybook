import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(isProd && {
    basePath: "/historybook",
    assetPrefix: "https://hiraike32.github.io/historybook",
  }),
};

export default nextConfig;
