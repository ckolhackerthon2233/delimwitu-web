"use client";

import { useParams } from "next/navigation";
import ItemDetailPage from "@/components/ItemDetailPage";

export default function BreakfastDetailPage() {
  const params = useParams();
  const itemId = params.id as string;

  return (
    <ItemDetailPage
      itemId={itemId}
      category="breakfast"
      backHref="/menu/breakfast"
      backLabel="Back to Breakfast"
    />
  );
}
