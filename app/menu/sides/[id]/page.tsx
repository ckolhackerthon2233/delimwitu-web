"use client";

import { useParams } from "next/navigation";
import ItemDetailPage from "@/components/ItemDetailPage";

export default function SidesDetailPage() {
  const params = useParams();
  const itemId = params.id as string;

  return (
    <ItemDetailPage
      itemId={itemId}
      category="sides"
      backHref="/menu"
      backLabel="Back to Menu"
    />
  );
}
