import type { MetadataRoute } from "next";
import { projectConfig } from "#/next.config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: projectConfig.name,
    short_name: projectConfig.name,
    description: projectConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#20161f",
    theme_color: "#db924b",
    icons: [
      { src: "/favicon.ico", type: "image/x-icon", sizes: "16x16 32x32" },
      { src: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { src: "/icon-512.png", type: "image/png", sizes: "512x512" },
      {
        src: "/icon-192-maskable.png",
        type: "image/png",
        sizes: "192x192",
        purpose: "maskable",
      },
      {
        src: "/icon-512-maskable.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "maskable",
      },
    ],
  };
}
