/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === "production";
const repository = "Portfolio";

const nextConfig = {
  output: "export",
  assetPrefix: prod ? `/${repository}/` : "",
  trailingSlash: true,
};

module.exports = nextConfig;
