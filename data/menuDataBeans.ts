/**
 * Beans/Ndengu dishes menu data for Delimwitu Cafe
 * All beans-related food items
 */

import type { MenuItem } from "@/types";

export const beansData: MenuItem[] = [
  {
    id: "ndengu-plain",
    cat: "food",
    subcategory: "Beans",
    title: "Ndengu Plain",
    desc: "Plain cooked ndengu (beans)",
    price: "KES 150",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=400&fit=crop&crop=center&auto=format&q=75" // plain cooked mung beans / ndengu curry
  },
  {
    id: "ndengu-rice",
    cat: "food",
    subcategory: "Beans",
    title: "Ndengu Rice",
    desc: "Ndengu with rice",
    price: "KES 250",
    img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=400&fit=crop&crop=center&auto=format&q=75" // rice with bean stew plate
  },
  {
    id: "chapati-ndengu-full",
    cat: "food",
    subcategory: "Beans",
    title: "Chapati Ndengu Full",
    desc: "Full plate chapati with ndengu",
    price: "KES 250",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=400&fit=crop&crop=center&auto=format&q=75" // chapati flatbread with beans
  },
  {
    id: "chapati-ndengu-half",
    cat: "food",
    subcategory: "Beans",
    title: "Chapati Ndengu Half",
    desc: "Half plate chapati with ndengu",
    price: "KES 200",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=400&fit=crop&crop=center&auto=format&q=75" // chapati flatbread with beans
  },
  {
    id: "chapati-beans",
    cat: "food",
    subcategory: "Beans",
    title: "Chapati Beans",
    desc: "Chapati with beans",
    price: "KES 200",
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=400&fit=crop&crop=center&auto=format&q=75" // red beans stew with chapati
  },
];