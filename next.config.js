/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "joonyoung-s-portfolio-page";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  assetPrefix: !debug ? `/${repository}/` : "",
  trailingSlash: true,
};

module.exports = nextConfig;
