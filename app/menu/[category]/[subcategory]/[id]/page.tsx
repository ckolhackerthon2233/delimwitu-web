import { use } from "react";
import ItemDetailPage from "@/components/ItemDetailPage";

interface MenuItemPageProps {
  params: Promise<{
    category: string;
    subcategory: string;
    id: string;
  }>;
}

export default function MenuItemPage({ params }: MenuItemPageProps) {
  const { category, subcategory, id } = use(params);
  const categoryLower = category.toLowerCase();
  const subcategoryDecoded = decodeURIComponent(subcategory);
  const backHref = `/menu?category=${categoryLower}&subcategory=${encodeURIComponent(subcategoryDecoded)}`;
  const backLabel = `${subcategoryDecoded.charAt(0).toUpperCase()}${subcategoryDecoded.slice(1)} Menu`;

  return (
    <ItemDetailPage
      itemId={decodeURIComponent(id)}
      category={categoryLower}
      subcategory={subcategoryDecoded}
      backHref={backHref}
      backLabel={backLabel}
    />
  );
}
