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
    themes: [
      {
        faraz: {
          primary: "#ffb4a6",
          "primary-content": "#160c0a",
          secondary: "#e7bdb5",
          "secondary-content": "#130d0c",
          accent: "#efc148",
          "accent-content": "#140e02",
          neutral: "#3b2d2a",
          "neutral-content": "#d4d1d0",
          "base-100": "#201a19",
          "base-200": "#1a1514",
          "base-300": "#15100f",
          "base-content": "#cdcbcb",
          info: "#0ea5e9",
          "info-content": "#000a13",
          success: "#10b981",
          "success-content": "#000d06",
          warning: "#fca500",
          "warning-content": "#160a00",
          error: "#e94f52",
          "error-content": "#130202",

          "--rounded-box": ".75rem",
        },
      },
    ],
    rtl: true,
  },
} satisfies Config;
