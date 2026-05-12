import Link from "next/link";
import type { MenuItem } from "@/types";
import { slugify } from "@/lib/utils";

interface MenuTableProps {
  items: MenuItem[];
}

export default function MenuTable({ items }: MenuTableProps) {
  const groupedItems = items.reduce<Record<string, MenuItem[]>>((groups, item) => {
    const groupKey = item.subcategory || item.cat || "Menu";
    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(item);
    return groups;
  }, {});

  return (
    <div className="space-y-10">
      {Object.entries(groupedItems).map(([group, groupItems]) => (
        <section key={group} className="overflow-hidden rounded-[2rem] border border-sand/40 bg-white shadow-sm">
          <div className="border-b border-sand/30 bg-cream/80 px-6 py-5 md:px-8 md:py-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h3 className="text-xl font-semibold text-dark-brown">{group}</h3>
              <div className="grid grid-cols-1 gap-4 text-sm font-semibold uppercase tracking-[0.25em] text-dark-brown/70 md:grid-cols-[1.4fr_0.6fr]">
                <span>Product</span>
                <span className="text-right md:text-right">Sale Price</span>
              </div>
            </div>
          </div>

          <div className="divide-y divide-sand/40">
            {groupItems.map((item) => {
              const itemId = item.id || slugify(item.title);
              const categorySlug = slugify(item.cat);
              const subcategorySlug = slugify(item.subcategory || "all");
              return (
                <Link
                  key={item.id ?? item.title}
                  href={`/menu/${categorySlug}/${subcategorySlug}/${itemId}`}
                  className="group block"
                >
                  <div className="grid grid-cols-1 gap-4 px-6 py-4 md:grid-cols-[1.4fr_0.6fr] md:px-8 md:py-5 md:items-center text-sm md:text-base text-dark-brown hover:bg-cream transition-colors duration-200">
                    <div className="space-y-1">
                      <p className="font-medium">{item.title}</p>
                      {item.desc && <p className="text-xs text-gray-500">{item.desc}</p>}
                    </div>
                    <div className="text-right font-semibold text-orange">{item.price.replace("KES", "KSh")}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
