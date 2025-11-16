import { locales } from "@/i18n/config";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({
  experimental: {
    srcPath: "./app",

    extract: {
      sourceLocale: "en",
    },

    messages: {
      path: "./messages",

      format: "json",

      locales: locales,
    },
  },
});

const nextConfig: NextConfig = {
  experimental: {
    scrollRestoration: true,
    cpus: 1,
    inlineCss: true,
    turbopackFileSystemCacheForDev: true,
  },
  cacheComponents: true,
  reactCompiler: true,
};

export default withNextIntl(nextConfig);
