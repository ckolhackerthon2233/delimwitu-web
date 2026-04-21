/**
 * Menu section data: featured dishes with image path, title, and price.
 * Consumed by components/Menu.tsx. Types from @/types (MenuItem).
 */
import type { MenuItem } from "@/types";

/** Menu items data - in a real app this would come from a CMS or API */
export const menuItems: MenuItem[] = [
  { img: "/menu/item-1.png", title: "Stilton and pancetta penne", price: "$24.00" },
  { img: "/menu/item-2.png", title: "Chorizo and avocado spaghetti", price: "$24.00" },
  { img: "/menu/item-3.png", title: "Crayfish and black pepper toastie", price: "$26.00" },
  { img: "/menu/item-4.png", title: "Orange and banana cookies", price: "$12.00" },
];
