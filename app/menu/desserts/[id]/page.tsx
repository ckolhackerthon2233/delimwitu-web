"use client";

import { useParams } from "next/navigation";
import ItemDetailPage from "@/components/ItemDetailPage";

export default function DessertsDetailPage() {
  const params = useParams();
  const itemId = params.id as string;

  return (
    <ItemDetailPage
      itemId={itemId}
      category="desserts"
      backHref="/menu/desserts"
      backLabel="Back to Desserts"
    />
  );
}
