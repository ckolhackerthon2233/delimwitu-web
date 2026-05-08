/**
 * Breakfast menu data for Delimwitu Cafe
 * All breakfast items organized by meal type
 */

import type { MenuItem } from "@/types";

export const breakfastData: MenuItem[] = [
  // ============ FOOD - BREAKFAST ============
  {
    id: "breakfast-executive",
    cat: "food",
    subcategory: "Breakfast",
    title: "The Executive",
    desc: "2 Fried Eggs, 2 Sausages, Toast, Fries, Bacon, Baked Beans",
    price: "KES 800",
    img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=400&fit=crop&crop=center",
    badge: "Popular"
  },
  {
    id: "classic-omelette",
    cat: "food",
    subcategory: "Breakfast",
    title: "Classic Omelette",
    desc: "Fluffy Omelette with 2 Sausages and Buttered Toast",
    price: "KES 450",
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "pancake-stack",
    cat: "food",
    subcategory: "Breakfast",
    title: "Pancake Stack",
    desc: "3 Golden Pancakes with Grilled Sausage",
    price: "KES 400",
    img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "healthy-start",
    cat: "food",
    subcategory: "Breakfast",
    title: "Healthy Start",
    desc: "Cereals, Yoghurt, Fresh Fruits and Juice",
    price: "KES 500",
    img: "https://images.unsplash.com/photo-1494597706938-16e75a2cce80?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "sunrise-breakfast",
    cat: "food",
    subcategory: "Breakfast",
    title: "The Sunrise",
    desc: "2 Fried Eggs, Buttered Toast, Sausage, Baked Potatoes",
    price: "KES 500",
    img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "breakfast-sandwich",
    cat: "food",
    subcategory: "Breakfast",
    title: "Breakfast Sandwich",
    desc: "Toasted Sandwich and Grilled Sausage",
    price: "KES 500",
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "quick-start-mandazi",
    cat: "food",
    subcategory: "Breakfast",
    title: "Quick Start - Mandazi",
    desc: "2 Fresh Mandazi and a Sausage (with Tea/Coffee)",
    price: "KES 270",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "samosa-combo",
    cat: "food",
    subcategory: "Breakfast",
    title: "Samosa Combo",
    desc: "2 Samosas and a Mandazi (with Tea)",
    price: "KES 260",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "rolex",
    cat: "food",
    subcategory: "Breakfast",
    title: "The Rolex",
    desc: "Traditional Chapati-wrapped Omelette",
    price: "KES 300",
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "ngwace-combo",
    cat: "food",
    subcategory: "Breakfast",
    title: "Ngwace Combo",
    desc: "Sweet Potatoes/Nduma, Fried Eggs, Sausage (with Tea/Coffee)",
    price: "KES 300",
    img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "boiled-eggs-combo",
    cat: "food",
    subcategory: "Breakfast",
    title: "Boiled Eggs Combo",
    desc: "2 Boiled Eggs with Sweet Potato/Nduma (with Tea/Coffee)",
    price: "KES 300",
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "rolex-combo",
    cat: "food",
    subcategory: "Breakfast",
    title: "Rolex Combo",
    desc: "Rolex with Tea or Coffee",
    price: "KES 300",
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "smocha",
    cat: "food",
    subcategory: "Breakfast",
    title: "Smocha",
    desc: "Smokie-Chapati Wrap",
    price: "KES 120",
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "samosa-pack",
    cat: "food",
    subcategory: "Breakfast",
    title: "Samosa Pack",
    desc: "3 pcs Samosas with Lemon Juice",
    price: "KES 300",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "spring-rolls",
    cat: "food",
    subcategory: "Breakfast",
    title: "Spring Rolls",
    desc: "2 pcs Spring Rolls",
    price: "KES 140",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "beef-kebabs",
    cat: "food",
    subcategory: "Breakfast",
    title: "Beef Kebabs",
    desc: "Grilled beef kebabs",
    price: "KES 150",
    img: "/menu/food/breakfast/beef-kebabs.png"
  },
  {
    id: "french-toast-breakfast",
    cat: "food",
    subcategory: "Breakfast",
    title: "French Toast",
    desc: "Golden French toast",
    price: "KES 170",
    img: "/menu/food/breakfast/french-toast.png"
  },
  {
    id: "smokie-kachumbari",
    cat: "food",
    subcategory: "Breakfast",
    title: "Smokie with Kachumbari",
    desc: "Grilled smokie with fresh tomato mix",
    price: "KES 150",
    img: "/menu/food/breakfast/smokie-kachumbari.png"
  },
  {
    id: "boiled-eggs-sweet-potato",
    cat: "food",
    subcategory: "Breakfast",
    title: "Boiled Eggs & Sweet Potato",
    desc: "Boiled eggs with sweet potato",
    price: "KES 150",
    img: "/menu/food/breakfast/boiled-eggs-sweet-potato.png"
  },
  {
    id: "fried-eggs-toast",
    cat: "food",
    subcategory: "Breakfast",
    title: "Fried Eggs & Toast",
    desc: "Fried eggs with toasted bread",
    price: "KES 150",
    img: "/menu/food/breakfast/fried-eggs-toast.png"
  },
];
