"use client";

import { useParams } from "next/navigation";
import ItemDetailPage from "@/components/ItemDetailPage";

export default function DrinkDetailPage() {
  const params = useParams();
  const itemId = params.id as string;

  return (
    <ItemDetailPage
      itemId={itemId}
      category="drinks"
      backHref="/menu/drinks"
      backLabel="Back to Beverages"
    />
  );
}
