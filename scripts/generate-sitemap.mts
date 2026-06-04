import { writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { menuData } from "../data/menuDataComplete.ts";
import { slugify } from "../lib/utils.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, "..");
const publicDir = resolve(rootDir, "public");
const SITE_URL = "https://delimwitu.co.ke";

const staticRoutes = [
  "",
  "/about",
  "/book-table",
  "/menu",
  "/menu/food",
  "/menu/drinks",
  "/menu/bakery",
];

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

const entries = [
  ...staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date().toISOString(),
    changeFreq: path === "" ? "weekly" : "weekly",
    priority: path === "" ? "1.0" : "0.8",
  })),
  ...menuData.map((item) => {
    const itemId = item.id || slugify(item.title);
    const subcategory = item.subcategory ? encodeURIComponent(item.subcategory) : "all";

    return {
      url: `${SITE_URL}/menu/${item.cat}/${subcategory}/${encodeURIComponent(itemId)}`,
      lastModified: new Date().toISOString(),
      changeFreq: "monthly",
      priority: "0.6",
    };
  }),
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(entry.url)}</loc>
    <lastmod>${escapeXml(entry.lastModified)}</lastmod>
    <changefreq>${escapeXml(entry.changeFreq)}</changefreq>
    <priority>${escapeXml(entry.priority)}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

writeFileSync(resolve(publicDir, "sitemap.xml"), sitemapXml, "utf8");
writeFileSync(
  resolve(publicDir, "robots.txt"),
  `User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: ${SITE_URL}/sitemap.xml\n`,
  "utf8",
);

console.log(`Generated ${resolve(publicDir, "sitemap.xml")}`);
console.log(`Generated ${resolve(publicDir, "robots.txt")}`);
