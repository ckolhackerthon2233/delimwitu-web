import type { MetadataRoute } from "next";
import { menuData } from "@/data/menuDataComplete";
import { slugify } from "@/lib/utils";

const SITE_URL = "https://delimwitu.co.ke";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/book-table",
    "/menu",
    "/menu/food",
    "/menu/drinks",
    "/menu/bakery",
  ];

  const baseEntries = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const menuItemEntries = menuData.map((item) => {
    const itemId = item.id || slugify(item.title);
    const subcategory = item.subcategory ? encodeURIComponent(item.subcategory) : "all";

    return {
      url: `${SITE_URL}/menu/${item.cat}/${subcategory}/${encodeURIComponent(itemId)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    };
  });

  return [...baseEntries, ...menuItemEntries];
}
