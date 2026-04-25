/**
 * Complete menu data with local images from /public/menu
 * Organized by category with breakfast, lunch, mains, sides, and desserts
 */

import type { MenuItem } from "@/types";

export const menuData: MenuItem[] = [
  // Breakfast Items
  {
    cat: "breakfast",
    badge: "Popular",
    title: "Everyday Breakfast",
    desc: "Classic morning favorites with fresh ingredients",
    price: "KSh 580",
    img: "/menu/everydayclassic/everyday-breakfast-01.png",
  },
  {
    cat: "breakfast",
    badge: "Chef's Pick",
    title: "French Toast",
    desc: "Golden, buttery French toast with syrup and berries",
    price: "KSh 520",
    img: "/menu/everydayclassic/french-toast-01.png",
  },
  {
    cat: "breakfast",
    title: "Breakfast Croissant",
    desc: "Flaky, buttery croissant perfect for any morning",
    price: "KSh 420",
    img: "/menu/everydayclassic/breakfast-croissant-01.png",
  },
  {
    cat: "breakfast",
    title: "Pancakes",
    desc: "Fluffy pancakes stacked high with toppings",
    price: "KSh 480",
    img: "/menu/everydayclassic/Pancakes.png",
  },
  {
    cat: "breakfast",
    title: "Eggs & Toast",
    desc: "Perfectly cooked eggs with crispy toast",
    price: "KSh 450",
    img: "/menu/everydayclassic/eggs-_-toast-02.png",
  },
  {
    cat: "breakfast",
    title: "Mango Granola Bowl",
    desc: "Fresh mango with granola and yogurt",
    price: "KSh 490",
    img: "/menu/everydayclassic/mango-granola-bowl-01.png",
  },
  {
    cat: "breakfast",
    title: "Fruit & Nut Granola",
    desc: "Nutritious granola with fresh fruits and nuts",
    price: "KSh 470",
    img: "/menu/everydayclassic/fruit-_-nut-granola-bowl.png",
  },
  {
    cat: "breakfast",
    title: "The Nairobian",
    desc: "Traditional Nairobi breakfast special",
    price: "KSh 550",
    img: "/menu/everydayclassic/the-nairobian-01.png",
  },

  // Lunch Items
  {
    cat: "lunch",
    badge: "Bestseller",
    title: "Classic Fish & Chips",
    desc: "Fresh battered fish with golden fries",
    price: "KSh 720",
    img: "/menu/lunch&dinner/classic-fish-_-chips-02_200x.png",
  },
  {
    cat: "lunch",
    badge: "Chef's Pick",
    title: "Butter Curry Chicken",
    desc: "Tender chicken in creamy curry sauce",
    price: "KSh 680",
    img: "/menu/lunch&dinner/butter-curry-chicken-02_200x.png",
  },
  {
    cat: "lunch",
    title: "Grilled Salmon",
    desc: "Fresh grilled salmon with seasonal vegetables",
    price: "KSh 850",
    img: "/menu/lunch&dinner/grilled-salmon-02_200x.png",
  },
  {
    cat: "lunch",
    title: "Roast Chicken",
    desc: "Succulent roasted chicken with herbs",
    price: "KSh 650",
    img: "/menu/lunch&dinner/roast-chicken-02_200x.png",
  },
  {
    cat: "lunch",
    title: "Sweet & Spicy Chicken",
    desc: "Chicken with sweet and spicy glaze",
    price: "KSh 670",
    img: "/menu/lunch&dinner/sweet-_-spicy-chicken_200x.png",
  },
  {
    cat: "lunch",
    title: "Steak of the Day",
    desc: "Premium grilled steak with sides",
    price: "KSh 950",
    img: "/menu/lunch&dinner/steak-of-the-day-02_200x.png",
  },
  {
    cat: "lunch",
    title: "Slow-Cooked BBQ Beef",
    desc: "Tender BBQ beef cooked to perfection",
    price: "KSh 780",
    img: "/menu/lunch&dinner/slow-cooked-bbq-beef-02_200x.png",
  },

  // Main Course - Bowls & Salads
  {
    cat: "mains",
    badge: "Popular",
    title: "Asian Beef Stir Fry",
    desc: "Crispy beef with Asian vegetables",
    price: "KSh 720",
    img: "/menu/bowls & salads/asian-beef-stir-fry-01.png",
  },
  {
    cat: "mains",
    title: "Chicken Caesar Salad",
    desc: "Fresh Caesar salad with grilled chicken",
    price: "KSh 580",
    img: "/menu/bowls & salads/chicken-caesar-salad-01.png",
  },
  {
    cat: "mains",
    title: "Teriyaki Bowl",
    desc: "Flavorful teriyaki with rice and vegetables",
    price: "KSh 650",
    img: "/menu/bowls & salads/teriyaki-bowl-01.png",
  },
  {
    cat: "mains",
    title: "Green Harvest Bowl",
    desc: "Fresh greens with seasonal vegetables",
    price: "KSh 520",
    img: "/menu/bowls & salads/green-harvest-bowl-01.png",
  },
  {
    cat: "mains",
    title: "Samurai Salad",
    desc: "Japanese-inspired salad with chicken",
    price: "KSh 610",
    img: "/menu/bowls & salads/samurai-salad-chicken-01.png",
  },
  {
    cat: "mains",
    title: "Heart Beet Bowl",
    desc: "Nutritious beet bowl with fresh vegetables",
    price: "KSh 550",
    img: "/menu/bowls & salads/heart-beet-bowl-01.png",
  },
  {
    cat: "mains",
    title: "The Mexican Salad",
    desc: "Spicy Mexican-style salad with fresh ingredients",
    price: "KSh 590",
    img: "/menu/bowls & salads/the-mexican-salad-01.png",
  },

  // Main Course - Burgers
  {
    cat: "mains",
    badge: "Bestseller",
    title: "Classic Beef Burger",
    desc: "Juicy beef burger with all the toppings",
    price: "KSh 650",
    img: "/menu/burgers/classic-beef-burger.png",
  },
  {
    cat: "mains",
    title: "Texas Burger",
    desc: "Hearty Texas-style burger with bacon and cheese",
    price: "KSh 720",
    img: "/menu/burgers/texas-burger.png",
  },
  {
    cat: "mains",
    title: "Cheese Burger",
    desc: "Classic cheeseburger with melted cheese",
    price: "KSh 600",
    img: "/menu/burgers/cheese-burger.png",
  },
  {
    cat: "mains",
    title: "Beet It Burger",
    desc: "Unique beet and bean burger for vegetarians",
    price: "KSh 580",
    img: "/menu/burgers/beet-it-burger.png",
  },
  {
    cat: "mains",
    title: "TexMex Chicken Burger",
    desc: "Spicy Mexican-style chicken burger",
    price: "KSh 640",
    img: "/menu/burgers/texmex-burger-chicken.png",
  },

  // Main Course - Pizza
  {
    cat: "mains",
    title: "Diavola Pizza",
    desc: "Spicy pizza with hot peppers and salami",
    price: "KSh 680",
    img: "/menu/pizza/diavola-pizza-01_180x.png",
  },
  {
    cat: "mains",
    title: "Hawaiian Pizza",
    desc: "Tropical pizza with pineapple and ham",
    price: "KSh 700",
    img: "/menu/pizza/hawaiian-pizza-01_180x.png",
  },
  {
    cat: "mains",
    title: "Veggie Extravaganza Pizza",
    desc: "Garden fresh vegetables on crispy crust",
    price: "KSh 620",
    img: "/menu/pizza/veg-extravaganza-pizza-01_180x.png",
  },

  // Drinks
  {
    cat: "drinks",
    subcategory: "cold",
    badge: "Best Seller",
    title: "Signature Cold Brew",
    desc: "18-hour steeped Kenyan single-origin coffee",
    price: "KSh 280",
    img: "/hero/coffee.png",
  },
  {
    cat: "drinks",
    subcategory: "cold",
    title: "Mango Lassi",
    desc: "Smooth yogurt drink with fresh mango",
    price: "KSh 200",
    img: "/menu/everydayclassic/mango-granola-bowl-01.png",
  },
  {
    cat: "drinks",
    subcategory: "cold",
    badge: "Popular",
    title: "Hibiscus Lemonade",
    desc: "Fresh hibiscus flowers with lemon and honey",
    price: "KSh 220",
    img: "/menu/starters/southwestern-fries-01_180x.png",
  },
  {
    cat: "drinks",
    subcategory: "hot",
    title: "Hot Chocolate",
    desc: "Rich and creamy hot chocolate with marshmallows",
    price: "KSh 250",
    img: "/menu/everydayclassic/mango-granola-bowl-01.png",
  },
  {
    cat: "drinks",
    subcategory: "hot",
    title: "Chai Latte",
    desc: "Spiced tea latte with cinnamon and cardamom",
    price: "KSh 220",
    img: "/menu/everydayclassic/mango-granola-bowl-01.png",
  },
  {
    cat: "drinks",
    subcategory: "alcoholic",
    badge: "Popular",
    title: "Kenyan Beer",
    desc: "Locally brewed lager beer",
    price: "KSh 350",
    img: "/menu/everydayclassic/mango-granola-bowl-01.png",
  },
  {
    cat: "drinks",
    subcategory: "non-alcoholic",
    title: "Virgin Mojito",
    desc: "Refreshing mint and lime mocktail",
    price: "KSh 300",
    img: "/menu/everydayclassic/mango-granola-bowl-01.png",
  },
];

// Helper functions
export const getItemsByCategory = (
  category: string
): MenuItem[] => {
  return menuData.filter((item) => item.cat === category);
};

export const getAllCategories = (): string[] => {
  return Array.from(new Set(menuData.map((item) => item.cat)));
};

export const getItemsByMultipleCategories = (
  categories: string[]
): MenuItem[] => {
  return menuData.filter((item) => categories.includes(item.cat));
};
