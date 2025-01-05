import { Metadata } from "next";
import { projectConfig } from "../../next.config";

const __metadata: Metadata = {
  title: {
    template: "%s | " + projectConfig.name,
    default: projectConfig.name,
  },
  description: projectConfig.description,
  publisher: "Gecut Cloud",
  creator: "Gecut Design",
  generator: "Next.js",
  formatDetection: { address: true, telephone: true },

  robots: {
    index: true,
    follow: true,
    notranslate: true,
  },
  keywords: ["Faraz", "Menu", "Coffee Shop", "فراز", "منو", "کافی شاپ"],

  openGraph: {
    type: "website",
    title: projectConfig.name,
    description: projectConfig.description,
    url: projectConfig.url.toString(),
    locale: "fa-IR",
    siteName: "Faraz Coffee Shop",
    images: projectConfig.url.toString() + "open-graph-image.webp",
  },
};

export default __metadata;
