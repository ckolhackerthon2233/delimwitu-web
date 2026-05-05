/**
 * Complete menu data with ArtCafe-inspired hierarchical structure
 * Top-level categories: food, drinks, bakery
 * Food subcategories: breakfast, starters, bowls-salads, lunch-dinner, burgers, pizza
 * Uses cat (top-level) and subcategory for filtering across pages
 */

import type { MenuItem } from "@/types";

/**
 * Sample menu data populated from public/menu/ images
 * Real production data would come from CMS/API
 * Each item has unique id, top-level cat, subcategory
 */

export const menuData: MenuItem[] = [
  // FOOD - Breakfast (from public/menu/everydayclassic/)
  {
    id: "everyday-breakfast",
    cat: "food" as const,
    subcategory: "breakfast",
    title: "Everyday Breakfast",
    desc: "Classic breakfast with eggs, toast and fresh fruits",
    price: "KES 850",
    img: "/menu/everydayclassic/everyday-breakfast-01.png",
    badge: "Popular"
  },
  {
    id: "french-toast",
    cat: "food" as const,
    subcategory: "breakfast",
    title: "French Toast",
    desc: "Fluffy french toast with maple syrup and berries",
    price: "KES 720",
    img: "/menu/everydayclassic/french-toast-01.png"
  },
  {
    id: "pancakes",
    cat: "food" as const,
    subcategory: "breakfast",
    title: "Fluffy Pancakes",
    desc: "Stack of fluffy pancakes with butter and syrup",
    price: "KES 680",
    img: "/menu/everydayclassic/Pancakes.png"
  },

  // FOOD - Starters (public/menu/starters/)
  {
    id: "art-wings-small",
    cat: "food" as const,
    subcategory: "starters",
    title: "Art Wings Small",
    desc: "Crispy chicken wings with signature Art sauce",
    price: "KES 650",
    img: "/menu/starters/art-wings-small-02_180x.png",
    badge: "Hot"
  },
  {
    id: "southwestern-nachos",
    cat: "food" as const,
    subcategory: "starters",
    title: "Southwestern Nachos",
    desc: "Loaded nachos with cheese, jalapeños and guac",
    price: "KES 780",
    img: "/menu/starters/southwestern-nachos-02_180x.png"
  },

  // FOOD - Bowls & Salads
  {
    id: "asian-beef-stir-fry",
    cat: "food" as const,
    subcategory: "bowls-salads",
    title: "Asian Beef Stir Fry Bowl",
    desc: "Beef stir fry with rice, veggies and teriyaki glaze",
    price: "KES 1,050",
    img: "/menu/bowls & salads/asian-beef-stir-fry-01.png"
  },
  {
    id: "chicken-caesar-salad",
    cat: "food" as const,
    subcategory: "bowls-salads",
    title: "Chicken Caesar Salad",
    desc: "Grilled chicken, romaine, croutons and caesar dressing",
    price: "KES 920",
    img: "/menu/bowls & salads/chicken-caesar-salad-01.png"
  },

  // FOOD - Lunch & Dinner (lunch&dinner/)
  {
    id: "grilled-salmon",
    cat: "food" as const,
    subcategory: "lunch-dinner",
    title: "Grilled Salmon",
    desc: "Fresh salmon fillet with lemon herb sauce and veggies",
    price: "KES 1,450",
    img: "/menu/lunch&dinner/grilled-salmon-02_200x.png"
  },
  {
    id: "butter-curry-chicken",
    cat: "food" as const,
    subcategory: "lunch-dinner",
    title: "Butter Curry Chicken",
    desc: "Creamy butter chicken with naan and rice",
    price: "KES 1,200",
    img: "/menu/lunch&dinner/butter-curry-chicken-02_200x.png"
  },

  // FOOD - Burgers
  {
    id: "classic-beef-burger",
    cat: "food" as const,
    subcategory: "burgers",
    title: "Classic Beef Burger",
    desc: "Juicy beef patty, cheese, lettuce, tomato and fries",
    price: "KES 1,050",
    img: "/menu/burgers/classic-beef-burger.png",
    badge: "Best Seller"
  },
  {
    id: "texas-burger",
    cat: "food" as const,
    subcategory: "burgers",
    title: "Texas Burger",
    desc: "Spicy beef burger with BBQ sauce and onion rings",
    price: "KES 1,150",
    img: "/menu/burgers/texas-burger.png"
  },

  // FOOD - Pizza
  {
    id: "beef-sausage-pizza",
    cat: "food" as const,
    subcategory: "pizza",
    title: "Beef Sausage Pizza",
    desc: "Thin crust pizza with beef sausage and mozzarella",
    price: "KES 1,350",
    img: "/menu/pizza/beef-sausage-pizza-01_180x.png"
  },

  // DRINKS - Samples (add real paths as available)
  {
    id: "hibiscus-lemonade",
    cat: "drinks" as const,
    subcategory: "non-alcoholic",
    title: "Hibiscus Lemonade",
    desc: "Refreshing hibiscus infused lemonade",
    price: "KES 350",
    img: "/hero/tb1.jpg" // placeholder
  },

  // BAKERY - Desserts
  {
    id: "salted-caramel-cake",
    cat: "bakery" as const,
    subcategory: "desserts",
    title: "Salted Caramel Cake",
    desc: "Rich salted caramel layer cake",
    price: "KES 450",
    img: "/menu/bowls & salads/green-harvest-bowl-plus-salted-caramel.png" // example
  }
];

/**
 * Get all top-level categories
 */
export const getTopLevelCategories = (): ('food' | 'drinks' | 'bakery')[] => ['food', 'drinks', 'bakery'];

/**
 * Filter items for top-level /menu page
 */
export const getTopLevelItems = (topLevel: 'food' | 'drinks' | 'bakery'): MenuItem[] => {
  return menuData.filter(item => item.cat === topLevel);
};

/**
 * Filter for subpages like /menu/food?subcat=breakfast
 * or /menu/food/page.tsx with subfilter
 */
export const getSubcategoryItems = (topLevel: string, subcat?: string): MenuItem[] => {
  return menuData.filter(item => {
    return item.cat === topLevel && (!subcat || item.subcategory === subcat);
  });
};
