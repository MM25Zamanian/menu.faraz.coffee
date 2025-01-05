import type { NextConfig } from "next";

export const projectConfig = {
  url: new URL("https://menu.faraz.gecut.ir"),
  name: "منوی فراز کافه",
  description:
    "کافه فراز، تجربه‌ای متفاوت از طعم قهوه. ما با تمرکز بر ارائه بهترین برندهای قهوه، منویی متنوع از نوشیدنی‌های گرم و سرد بر پایه قهوه را برای شما فراهم کرده‌ایم. در کافه فراز خبری از دسر و میان‌وعده نیست، اینجا فقط برای عاشقان قهوه است.",
} as const;

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [{ source: "/", destination: "/menu", permanent: true }];
  },
};

export default nextConfig;
