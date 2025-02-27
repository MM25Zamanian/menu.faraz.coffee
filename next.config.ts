import type { NextConfig } from "next";

export const projectConfig = {
  url: new URL("https://menu.faraz.gecut.ir"),
  name: "منوی کافه فراز",
  description:
    "تجربه‌ای متفاوت از طعم قهوه. ما با تمرکز بر ارائه بهترین برندهای قهوه، منویی متنوع از نوشیدنی‌های گرم و سرد بر پایه قهوه را برای شما فراهم کرده‌ایم. در کافه فراز خبری از دسر و میان‌وعده نیست، اینجا فقط برای عاشقان قهوه است.",
} as const;

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: { unoptimized: true },

  trailingSlash: true,
  transpilePackages: ["#/*", "@/*", "~/*"],
  reactStrictMode: true,

  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
