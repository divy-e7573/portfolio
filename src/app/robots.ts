import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://divye.vercel.app/sitemap.xml",
    host: "https://divye.vercel.app",
  };
}
