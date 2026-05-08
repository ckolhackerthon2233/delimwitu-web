/**
 * Complete menu data with hierarchical structure
 * Top-level categories: food, drinks, bakery
 * Each with its own subcategories and items
 */

import type { MenuItem } from "@/types";

/**
 * Menu data organized by category and subcategory
 * Each item includes subcategory for filtering
 */

export const menuData: MenuItem[] = [
  // ============ FOOD ============
  // FOOD - Everyday Classic Breakfasts
  {
    id: "everyday-breakfast",
    cat: "food" as const,
    subcategory: "Everyday Classic Breakfasts",
    title: "Eggs & Toast",
    desc: "Classic eggs with toasted bread and fresh fruits",
    price: "KES 850",
    img: "/menu/everydayclassic/everyday-breakfast-01.png",
    badge: "Popular"
  },
  {
    id: "french-toast",
    cat: "food" as const,
    subcategory: "Everyday Classic Breakfasts",
    title: "French Toast",
    desc: "Fluffy french toast with maple syrup and berries",
    price: "KES 720",
    img: "/menu/everydayclassic/french-toast-01.png"
  },
  {
    id: "pancakes",
    cat: "food" as const,
    subcategory: "Everyday Classic Breakfasts",
    title: "Fluffy Pancakes",
    desc: "Stack of fluffy pancakes with butter and syrup",
    price: "KES 680",
    img: "/menu/everydayclassic/Pancakes.png"
  },

  // FOOD - Starters & Sharing
  {
    id: "art-wings-small",
    cat: "food" as const,
    subcategory: "Starters & Sharing",
    title: "Art Wings Small",
    desc: "Crispy chicken wings with signature sauce",
    price: "KES 650",
    img: "/menu/starters/art-wings-small-02_180x.png",
    badge: "Hot"
  },
  {
    id: "southwestern-nachos",
    cat: "food" as const,
    subcategory: "Starters & Sharing",
    title: "Southwestern Nachos",
    desc: "Loaded nachos with cheese, jalapeños and guac",
    price: "KES 780",
    img: "/menu/starters/southwestern-nachos-02_180x.png"
  },
  {
    id: "crispy-calamari",
    cat: "food" as const,
    subcategory: "Starters & Sharing",
    title: "Crispy Calamari",
    desc: "Golden fried calamari with cocktail sauce",
    price: "KES 920",
    img: "/menu/starters/art-wings-small-02_180x.png"
  },

  // FOOD - Wraps
  {
    id: "chicken-wrap",
    cat: "food" as const,
    subcategory: "Wraps",
    title: "Grilled Chicken Wrap",
    desc: "Tender grilled chicken with fresh veggies and sauce",
    price: "KES 650",
    img: "/menu/wraps/chicken-wrap.png"
  },
  {
    id: "beef-wrap",
    cat: "food" as const,
    subcategory: "Wraps",
    title: "Seasoned Beef Wrap",
    desc: "Spiced beef with lettuce, tomato and special sauce",
    price: "KES 750",
    img: "/menu/wraps/beef-wrap.png"
  },
  {
    id: "veggie-wrap",
    cat: "food" as const,
    subcategory: "Wraps",
    title: "Garden Veggie Wrap",
    desc: "Fresh vegetables with hummus and herbs",
    price: "KES 580",
    img: "/menu/wraps/veggie-wrap.png"
  },

  // FOOD - Bowls & Salads
  {
    id: "asian-beef-stir-fry",
    cat: "food" as const,
    subcategory: "Bowls & Salads",
    title: "Asian Beef Stir Fry Bowl",
    desc: "Beef stir fry with rice, veggies and teriyaki glaze",
    price: "KES 1,050",
    img: "/menu/bowls & salads/asian-beef-stir-fry-01.png"
  },
  {
    id: "chicken-caesar-salad",
    cat: "food" as const,
    subcategory: "Bowls & Salads",
    title: "Chicken Caesar Salad",
    desc: "Grilled chicken, romaine, croutons and caesar dressing",
    price: "KES 920",
    img: "/menu/bowls & salads/chicken-caesar-salad-01.png"
  },
  {
    id: "quinoa-power-bowl",
    cat: "food" as const,
    subcategory: "Bowls & Salads",
    title: "Quinoa Power Bowl",
    desc: "Nutritious quinoa with roasted veggies and tahini dressing",
    price: "KES 880",
    img: "/menu/bowls & salads/green-harvest-bowl-plus-salted-caramel.png"
  },

  // FOOD - Lunch & Dinner
  {
    id: "grilled-salmon",
    cat: "food" as const,
    subcategory: "Lunch & Dinner",
    title: "Grilled Salmon",
    desc: "Fresh salmon fillet with lemon herb sauce and veggies",
    price: "KES 1,450",
    img: "/menu/lunch&dinner/grilled-salmon-02_200x.png"
  },
  {
    id: "butter-curry-chicken",
    cat: "food" as const,
    subcategory: "Lunch & Dinner",
    title: "Butter Curry Chicken",
    desc: "Creamy butter chicken with naan and rice",
    price: "KES 1,200",
    img: "/menu/lunch&dinner/butter-curry-chicken-02_200x.png"
  },
  {
    id: "ribeye-steak",
    cat: "food" as const,
    subcategory: "Lunch & Dinner",
    title: "Ribeye Steak",
    desc: "Premium cut with garlic mash and seasonal vegetables",
    price: "KES 2,350",
    img: "/menu/lunch&dinner/grilled-salmon-02_200x.png"
  },

  // FOOD - Art Italian-Style Pizzas
  {
    id: "beef-sausage-pizza",
    cat: "food" as const,
    subcategory: "Art Italian-Style Pizzas",
    title: "Beef Sausage Pizza",
    desc: "Thin crust pizza with beef sausage and mozzarella",
    price: "KES 1,350",
    img: "/menu/pizza/beef-sausage-pizza-01_180x.png"
  },
  {
    id: "margherita-pizza",
    cat: "food" as const,
    subcategory: "Art Italian-Style Pizzas",
    title: "Margherita Pizza",
    desc: "Classic pizza with fresh basil, mozzarella and tomato",
    price: "KES 1,200",
    img: "/menu/pizza/beef-sausage-pizza-01_180x.png"
  },
  {
    id: "quattro-formaggi-pizza",
    cat: "food" as const,
    subcategory: "Art Italian-Style Pizzas",
    title: "Quattro Formaggi Pizza",
    desc: "Four cheese blend with herbs",
    price: "KES 1,450",
    img: "/menu/pizza/beef-sausage-pizza-01_180x.png"
  },

  // FOOD - Burgers
  {
    id: "classic-beef-burger",
    cat: "food" as const,
    subcategory: "Burgers",
    title: "Classic Beef Burger",
    desc: "Juicy beef patty, cheese, lettuce, tomato and fries",
    price: "KES 1,050",
    img: "/menu/burgers/classic-beef-burger.png",
    badge: "Best Seller"
  },
  {
    id: "texas-burger",
    cat: "food" as const,
    subcategory: "Burgers",
    title: "Texas Burger",
    desc: "Spicy beef burger with BBQ sauce and onion rings",
    price: "KES 1,150",
    img: "/menu/burgers/texas-burger.png"
  },
  {
    id: "bacon-mushroom-burger",
    cat: "food" as const,
    subcategory: "Burgers",
    title: "Bacon Mushroom Burger",
    desc: "Beef burger with crispy bacon and sautéed mushrooms",
    price: "KES 1,250",
    img: "/menu/burgers/classic-beef-burger.png"
  },

  // FOOD - Sandwiches
  {
    id: "grilled-chicken-sandwich",
    cat: "food" as const,
    subcategory: "Sandwiches",
    title: "Grilled Chicken Sandwich",
    desc: "Tender chicken breast with pesto and mozzarella",
    price: "KES 780",
    img: "/menu/sandwitch/chicken-sandwich.png"
  },
  {
    id: "roast-beef-sandwich",
    cat: "food" as const,
    subcategory: "Sandwiches",
    title: "Roast Beef Sandwich",
    desc: "Sliced roast beef with horseradish cream on focaccia",
    price: "KES 880",
    img: "/menu/sandwitch/beef-sandwich.png"
  },
  {
    id: "caprese-sandwich",
    cat: "food" as const,
    subcategory: "Sandwiches",
    title: "Caprese Sandwich",
    desc: "Mozzarella, tomato, basil and balsamic glaze",
    price: "KES 720",
    img: "/menu/sandwitch/veggie-sandwich.png"
  },

  // FOOD - Pasta
  {
    id: "pasta-carbonara",
    cat: "food" as const,
    subcategory: "Pasta",
    title: "Pasta Carbonara",
    desc: "Classic carbonara with pancetta and creamy sauce",
    price: "KES 1,150",
    img: "/menu/pastas/pasta-carbonara.png"
  },
  {
    id: "seafood-pasta",
    cat: "food" as const,
    subcategory: "Pasta",
    title: "Seafood Pasta",
    desc: "Fresh shrimp and mussels in white wine sauce",
    price: "KES 1,450",
    img: "/menu/pastas/seafood-pasta.png"
  },
  {
    id: "bolognese-pasta",
    cat: "food" as const,
    subcategory: "Pasta",
    title: "Bolognese Pasta",
    desc: "Traditional meat sauce with fresh pasta",
    price: "KES 1,050",
    img: "/menu/pastas/bolognese-pasta.png"
  },

  // FOOD - Kids
  {
    id: "kids-chicken-nuggets",
    cat: "food" as const,
    subcategory: "Kids",
    title: "Chicken Nuggets & Fries",
    desc: "Golden chicken nuggets with fries and dip",
    price: "KES 550",
    img: "/menu/kids/chicken-nuggets.png"
  },
  {
    id: "kids-pasta",
    cat: "food" as const,
    subcategory: "Kids",
    title: "Kids Pasta",
    desc: "Simple pasta with butter or tomato sauce",
    price: "KES 480",
    img: "/menu/pastas/pasta-carbonara.png"
  },
  {
    id: "kids-burger",
    cat: "food" as const,
    subcategory: "Kids",
    title: "Mini Burger",
    desc: "Kid-sized burger with fries",
    price: "KES 520",
    img: "/menu/burgers/classic-beef-burger.png"
  },

  // ============ DRINKS ============
  // Coffee Drinks
  {
    id: "espresso",
    cat: "drinks" as const,
    subcategory: "Coffee",
    title: "Espresso",
    desc: "Rich and bold double shot",
    price: "KES 280",
    img: "/hero/tb1.jpg",
    modifiers: [
      { name: "Low-fat", price: "+KES 50" },
      { name: "Whipped Cream", price: "+KES 100" },
      { name: "Vanilla Shot", price: "+KES 100" },
      { name: "Caramel Shot", price: "+KES 100" },
      { name: "Hazelnut Shot", price: "+KES 100" },
      { name: "Extra Espresso Shot", price: "+KES 150" },
      { name: "Almond Milk", price: "+KES 150" },
      { name: "Oat Milk", price: "+KES 150" },
      { name: "Soy Milk", price: "+KES 150" },
      { name: "Bailey's Shot", price: "+KES 500" }
    ]
  },
  {
    id: "cappuccino",
    cat: "drinks" as const,
    subcategory: "Coffee",
    title: "Cappuccino",
    desc: "Smooth blend of espresso and steamed milk",
    price: "KES 320",
    img: "/hero/tb1.jpg",
    modifiers: [
      { name: "Low-fat", price: "+KES 50" },
      { name: "Whipped Cream", price: "+KES 100" },
      { name: "Vanilla Shot", price: "+KES 100" },
      { name: "Caramel Shot", price: "+KES 100" },
      { name: "Extra Espresso Shot", price: "+KES 150" },
      { name: "Almond Milk", price: "+KES 150" },
      { name: "Oat Milk", price: "+KES 150" },
      { name: "Soy Milk", price: "+KES 150" },
      { name: "Bailey's Shot", price: "+KES 500" }
    ]
  },
  {
    id: "latte",
    cat: "drinks" as const,
    subcategory: "Coffee",
    title: "Latte",
    desc: "Creamy espresso with velvety steamed milk",
    price: "KES 300",
    img: "/hero/tb1.jpg",
    modifiers: [
      { name: "Low-fat", price: "+KES 50" },
      { name: "Whipped Cream", price: "+KES 100" },
      { name: "Vanilla Shot", price: "+KES 100" },
      { name: "Caramel Shot", price: "+KES 100" },
      { name: "Extra Espresso Shot", price: "+KES 150" },
      { name: "Almond Milk", price: "+KES 150" },
      { name: "Oat Milk", price: "+KES 150" },
      { name: "Soy Milk", price: "+KES 150" },
      { name: "Bailey's Shot", price: "+KES 500" }
    ]
  },
  {
    id: "americano",
    cat: "drinks" as const,
    subcategory: "Coffee",
    title: "Americano",
    desc: "Espresso shots with hot water",
    price: "KES 250",
    img: "/hero/tb1.jpg",
    modifiers: [
      { name: "Low-fat", price: "+KES 50" },
      { name: "Whipped Cream", price: "+KES 100" },
      { name: "Vanilla Shot", price: "+KES 100" },
      { name: "Extra Espresso Shot", price: "+KES 150" },
      { name: "Almond Milk", price: "+KES 150" },
      { name: "Oat Milk", price: "+KES 150" },
      { name: "Soy Milk", price: "+KES 150" }
    ]
  },

  // Cold Drinks
  {
    id: "iced-coffee",
    cat: "drinks" as const,
    subcategory: "Cold Drinks",
    title: "Iced Coffee",
    desc: "Chilled coffee with ice and milk",
    price: "KES 320",
    img: "/hero/tb1.jpg",
    modifiers: [
      { name: "Whipped Cream", price: "+KES 100" },
      { name: "Vanilla Syrup", price: "+KES 100" },
      { name: "Caramel Syrup", price: "+KES 100" },
      { name: "Oat Milk", price: "+KES 150" },
      { name: "Almond Milk", price: "+KES 150" }
    ]
  },
  {
    id: "iced-latte",
    cat: "drinks" as const,
    subcategory: "Cold Drinks",
    title: "Iced Latte",
    desc: "Cool and refreshing latte with ice",
    price: "KES 350",
    img: "/hero/tb1.jpg",
    modifiers: [
      { name: "Whipped Cream", price: "+KES 100" },
      { name: "Vanilla Syrup", price: "+KES 100" },
      { name: "Caramel Syrup", price: "+KES 100" },
      { name: "Oat Milk", price: "+KES 150" },
      { name: "Almond Milk", price: "+KES 150" }
    ]
  },
  {
    id: "cold-brew",
    cat: "drinks" as const,
    subcategory: "Cold Drinks",
    title: "Cold Brew",
    desc: "Smooth and less acidic cold-brewed coffee",
    price: "KES 380",
    img: "/hero/tb1.jpg",
    modifiers: [
      { name: "Whipped Cream", price: "+KES 100" },
      { name: "Oat Milk", price: "+KES 150" },
      { name: "Almond Milk", price: "+KES 150" },
      { name: "Soy Milk", price: "+KES 150" }
    ]
  },

  // Smoothies & Juices
  {
    id: "berry-smoothie",
    cat: "drinks" as const,
    subcategory: "Smoothies & Juices",
    title: "Berry Blast Smoothie",
    desc: "Mixed berries with yogurt and honey",
    price: "KES 420",
    img: "/hero/tb1.jpg"
  },
  {
    id: "mango-smoothie",
    cat: "drinks" as const,
    subcategory: "Smoothies & Juices",
    title: "Mango Smoothie",
    desc: "Creamy mango with coconut milk",
    price: "KES 400",
    img: "/hero/tb1.jpg"
  },
  {
    id: "fresh-orange-juice",
    cat: "drinks" as const,
    subcategory: "Smoothies & Juices",
    title: "Fresh Orange Juice",
    desc: "Freshly squeezed orange juice",
    price: "KES 350",
    img: "/hero/tb1.jpg"
  },
  {
    id: "carrot-juice",
    cat: "drinks" as const,
    subcategory: "Smoothies & Juices",
    title: "Carrot & Ginger Juice",
    desc: "Fresh carrot juice with ginger kick",
    price: "KES 380",
    img: "/hero/tb1.jpg"
  },

  // Specialty Drinks
  {
    id: "hibiscus-lemonade",
    cat: "drinks" as const,
    subcategory: "Specialty Drinks",
    title: "Hibiscus Lemonade",
    desc: "Refreshing hibiscus infused lemonade",
    price: "KES 350",
    img: "/hero/tb1.jpg"
  },
  {
    id: "iced-tea",
    cat: "drinks" as const,
    subcategory: "Specialty Drinks",
    title: "Iced Tea",
    desc: "Chilled tea with lemon and mint",
    price: "KES 280",
    img: "/hero/tb1.jpg"
  },
  {
    id: "mint-mojito",
    cat: "drinks" as const,
    subcategory: "Specialty Drinks",
    title: "Mint Mojito (N/A)",
    desc: "Refreshing mint and lime mocktail",
    price: "KES 420",
    img: "/hero/tb1.jpg"
  },

  // ============ BAKERY ============
  // Cake Slices
  {
    id: "chocolate-cake-slice",
    cat: "bakery" as const,
    subcategory: "Cake Slices",
    title: "Chocolate Cake Slice",
    desc: "Rich and moist chocolate cake",
    price: "KES 450",
    img: "/menu/bowls & salads/green-harvest-bowl-plus-salted-caramel.png"
  },
  {
    id: "carrot-cake-slice",
    cat: "bakery" as const,
    subcategory: "Cake Slices",
    title: "Carrot Cake Slice",
    desc: "Classic carrot cake with cream cheese frosting",
    price: "KES 420",
    img: "/menu/bowls & salads/green-harvest-bowl-plus-salted-caramel.png"
  },
  {
    id: "vanilla-cake-slice",
    cat: "bakery" as const,
    subcategory: "Cake Slices",
    title: "Vanilla Cake Slice",
    desc: "Light and fluffy vanilla sponge cake",
    price: "KES 380",
    img: "/menu/bowls & salads/green-harvest-bowl-plus-salted-caramel.png"
  },
  {
    id: "cheesecake-slice",
    cat: "bakery" as const,
    subcategory: "Cake Slices",
    title: "New York Cheesecake Slice",
    desc: "Creamy and tangy cheesecake",
    price: "KES 520",
    img: "/menu/bowls & salads/green-harvest-bowl-plus-salted-caramel.png"
  },

  // Whole Cakes
  {
    id: "whole-chocolate-cake",
    cat: "bakery" as const,
    subcategory: "Whole Cakes",
    title: "Whole Chocolate Cake",
    desc: "Full chocolate cake - order 24hrs in advance",
    price: "KES 2,800",
    img: "/menu/bowls & salads/green-harvest-bowl-plus-salted-caramel.png"
  },
  {
    id: "whole-vanilla-cake",
    cat: "bakery" as const,
    subcategory: "Whole Cakes",
    title: "Whole Vanilla Cake",
    desc: "Full vanilla cake - order 24hrs in advance",
    price: "KES 2,400",
    img: "/menu/bowls & salads/green-harvest-bowl-plus-salted-caramel.png"
  },
  {
    id: "whole-carrot-cake",
    cat: "bakery" as const,
    subcategory: "Whole Cakes",
    title: "Whole Carrot Cake",
    desc: "Full carrot cake - order 24hrs in advance",
    price: "KES 2,600",
    img: "/menu/bowls & salads/green-harvest-bowl-plus-salted-caramel.png"
  },

  // Tea Cakes
  {
    id: "lemon-tea-cake",
    cat: "bakery" as const,
    subcategory: "Tea Cakes",
    title: "Lemon Tea Cake",
    desc: "Light lemon-flavored tea cake",
    price: "KES 280",
    img: "/menu/bowls & salads/green-harvest-bowl-plus-salted-caramel.png"
  },
  {
    id: "earl-grey-tea-cake",
    cat: "bakery" as const,
    subcategory: "Tea Cakes",
    title: "Earl Grey Tea Cake",
    desc: "Elegant Earl Grey infused tea cake",
    price: "KES 300",
    img: "/menu/bowls & salads/green-harvest-bowl-plus-salted-caramel.png"
  },
  {
    id: "honey-tea-cake",
    cat: "bakery" as const,
    subcategory: "Tea Cakes",
    title: "Honey Tea Cake",
    desc: "Sweet honey-sweetened tea cake",
    price: "KES 290",
    img: "/menu/bowls & salads/green-harvest-bowl-plus-salted-caramel.png"
  },

  // Fresh Pastries & Sweets
  {
    id: "croissant",
    cat: "bakery" as const,
    subcategory: "Fresh Pastries & Sweets",
    title: "Butter Croissant",
    desc: "Flaky and buttery French croissant",
    price: "KES 280",
    img: "/menu/bowls & salads/green-harvest-bowl-plus-salted-caramel.png"
  },
  {
    id: "chocolate-croissant",
    cat: "bakery" as const,
    subcategory: "Fresh Pastries & Sweets",
    title: "Chocolate Croissant",
    desc: "Crispy croissant with dark chocolate",
    price: "KES 320",
    img: "/menu/bowls & salads/green-harvest-bowl-plus-salted-caramel.png"
  },
  {
    id: "danish-pastry",
    cat: "bakery" as const,
    subcategory: "Fresh Pastries & Sweets",
    title: "Danish Pastry",
    desc: "Various fruit and cream danish pastries",
    price: "KES 300",
    img: "/menu/bowls & salads/green-harvest-bowl-plus-salted-caramel.png"
  },
  {
    id: "eclair",
    cat: "bakery" as const,
    subcategory: "Fresh Pastries & Sweets",
    title: "Chocolate Eclair",
    desc: "Cream-filled eclair with chocolate glaze",
    price: "KES 350",
    img: "/menu/bowls & salads/green-harvest-bowl-plus-salted-caramel.png"
  },
  {
    id: "macarons",
    cat: "bakery" as const,
    subcategory: "Fresh Pastries & Sweets",
    title: "French Macarons",
    desc: "Assorted flavored macarons (3 pieces)",
    price: "KES 420",
    img: "/menu/bowls & salads/green-harvest-bowl-plus-salted-caramel.png"
  },

  // Freshly Baked Breads
  {
    id: "sourdough-bread",
    cat: "bakery" as const,
    subcategory: "Freshly Baked Breads",
    title: "Sourdough Bread",
    desc: "Artisan sourdough with tangy flavor",
    price: "KES 420",
    img: "/menu/bowls & salads/green-harvest-bowl-plus-salted-caramel.png"
  },
  {
    id: "whole-wheat-bread",
    cat: "bakery" as const,
    subcategory: "Freshly Baked Breads",
    title: "Whole Wheat Bread",
    desc: "Healthy whole wheat loaf",
    price: "KES 380",
    img: "/menu/bowls & salads/green-harvest-bowl-plus-salted-caramel.png"
  },
  {
    id: "focaccia-bread",
    cat: "bakery" as const,
    subcategory: "Freshly Baked Breads",
    title: "Focaccia Bread",
    desc: "Italian focaccia with rosemary and olive oil",
    price: "KES 450",
    img: "/menu/bowls & salads/green-harvest-bowl-plus-salted-caramel.png"
  },
  {
    id: "multigrain-bread",
    cat: "bakery" as const,
    subcategory: "Freshly Baked Breads",
    title: "Multigrain Bread",
    desc: "Nutritious multigrain loaf",
    price: "KES 400",
    img: "/menu/bowls & salads/green-harvest-bowl-plus-salted-caramel.png"
  },

];

/**
 * Get all subcategories for a given top-level category
 */
export const getSubcategoriesForCategory = (cat: 'food' | 'drinks' | 'bakery'): string[] => {
  const subcats = new Set<string>();
  menuData.forEach(item => {
    if (item.cat === cat && item.subcategory) {
      subcats.add(item.subcategory);
    }
  });
  return Array.from(subcats).sort();
};

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
