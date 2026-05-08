/**
 * Bakery menu data for Delimwitu Cafe
 * All bakery and dessert items
 */

import type { MenuItem } from "@/types";

export const bakeryData: MenuItem[] = [
  // ============ BAKERY - DESSERTS ============
  {
    id: "chocolate-cake",
    cat: "bakery",
    subcategory: "Desserts",
    title: "Chocolate Cake",
    desc: "Rich chocolate cake with frosting",
    price: "KES 350",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop&crop=center",
    badge: "Popular"
  },
  {
    id: "vanilla-cupcake",
    cat: "bakery",
    subcategory: "Desserts",
    title: "Vanilla Cupcake",
    desc: "Classic vanilla cupcake with buttercream",
    price: "KES 150",
    img: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "brownie",
    cat: "bakery",
    subcategory: "Desserts",
    title: "Chocolate Brownie",
    desc: "Fudgy chocolate brownie",
    price: "KES 200",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "fruit-tart",
    cat: "bakery",
    subcategory: "Desserts",
    title: "Fruit Tart",
    desc: "Fresh fruit tart with custard",
    price: "KES 300",
    img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "croissant",
    cat: "bakery",
    subcategory: "Desserts",
    title: "Butter Croissant",
    desc: "Flaky butter croissant",
    price: "KES 180",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop&crop=center"
  }
];