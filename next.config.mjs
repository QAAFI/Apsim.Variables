import { env } from "./src/env/server.mjs";

const debug = process.env.NODE_ENV !== "production";

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return config;
}

export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
  distDir: "build",
  basePath: !debug ? process.env.NEXT_PUBLIC_BASE_PATH : '',
  assetPrefix: !debug ? process.env.NEXT_PUBLIC_BASE_PATH : ''
});
