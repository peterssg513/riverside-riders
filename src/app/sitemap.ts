import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://riversideriderscarshow.com";
  const now = new Date();

  return [
    // Homepage — highest priority, most frequently crawled
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    // Registration — second highest (conversion page)
    {
      url: `${baseUrl}/#register`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    // About section
    {
      url: `${baseUrl}/#about`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Awards / trophy classes
    {
      url: `${baseUrl}/#awards`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // Gallery / past shows
    {
      url: `${baseUrl}/#gallery`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Location & directions
    {
      url: `${baseUrl}/#location`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // FAQ (drives FAQ rich results)
    {
      url: `${baseUrl}/#faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];
}
