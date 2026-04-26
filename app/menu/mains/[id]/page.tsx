"use client";

import { useParams } from "next/navigation";
import ItemDetailPage from "@/components/ItemDetailPage";

export default function MainsDetailPage() {
  const params = useParams();
  const itemId = params.id as string;

  return (
    <ItemDetailPage
      itemId={itemId}
      category="mains"
      backHref="/menu/mains"
      backLabel="Back to Mains"
    />
  );
}
