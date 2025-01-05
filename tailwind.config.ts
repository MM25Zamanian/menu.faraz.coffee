import type { Config } from "tailwindcss";
import daisyui, { Config as DaisyConfig } from "daisyui";
import animated from "tailwindcss-animated";
import safeArea from "tailwindcss-safe-area";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [animated, daisyui, safeArea],
  daisyui: <DaisyConfig>{
    themes: ["emerald"],
    rtl: true,
  },
} satisfies Config;
