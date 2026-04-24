/**
 * Complete menu data organized by category
 * Used by menu pages: food, drinks, and main menu
 */

export interface MenuItem {
  cat: "breakfast" | "lunch" | "mains" | "desserts" | "drinks";
  badge?: string;
  title: string;
  desc: string;
  price: string;
  img: string;
  fallback: string;
}

export const menuData: MenuItem[] = [
  // Breakfast Items
  {
    cat: "breakfast",
    badge: "Popular",
    title: "Swahili Breakfast Platter",
    desc: "Maandazi, samosas, mbaazi, chai — a coastal morning spread.",
    price: "KSh 680",
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80",
  },
  {
    cat: "breakfast",
    title: "Avocado Toast",
    desc: "Sourdough, smashed avocado, poached egg, chilli flakes.",
    price: "KSh 520",
    img: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&q=80",
  },
  {
    cat: "breakfast",
    badge: "Chef's Pick",
    title: "Eggs Benedict with Kenyan Hollandaise",
    desc: "English muffin, steamed eggs, crispy bacon, silky sauce.",
    price: "KSh 590",
    img: "https://images.unsplash.com/photo-1603046891726-36bfd957e2af?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
  },
  {
    cat: "breakfast",
    title: "Fruit Smoothie Bowl",
    desc: "Mixed berries, yogurt, granola, local honey drizzle.",
    price: "KSh 450",
    img: "https://images.unsplash.com/photo-1590080876-0cd4dfe84ee2?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1419365723913-64852646f628?w=400&q=80",
  },
  {
    cat: "breakfast",
    title: "Coconut Porridge",
    desc: "Creamy coconut oats topped with fresh mango and nuts.",
    price: "KSh 380",
    img: "https://images.unsplash.com/photo-1509435713662-4454ec28dec8?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80",
  },
  {
    cat: "breakfast",
    title: "Spiced Pancakes",
    desc: "Fluffy pancakes with tamarind syrup and whipped cream.",
    price: "KSh 480",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
  },
  {
    cat: "breakfast",
    title: "Pastry & Cappuccino",
    desc: "Croissant, danish, or pain au chocolat with artisan coffee.",
    price: "KSh 420",
    img: "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
  },
  {
    cat: "breakfast",
    title: "Ugali & Sukuma Wiki",
    desc: "Traditional corn porridge with sautéed greens and butter.",
    price: "KSh 320",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1568039409695-46d7a5a912f1?w=400&q=80",
  },

  // Lunch Items
  {
    cat: "lunch",
    badge: "Daily Special",
    title: "Grilled Chicken Lunch Combo",
    desc: "Juicy grilled chicken breast with rice, beans, and seasonal greens.",
    price: "KSh 650",
    img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1555939594-58d7cb561af1?w=400&q=80",
  },
  {
    cat: "lunch",
    title: "Quinoa Buddha Bowl",
    desc: "Protein-packed bowl with quinoa, roasted vegetables, and tahini.",
    price: "KSh 580",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
  },
  {
    cat: "lunch",
    title: "Fish & Chips",
    desc: "Crispy battered tilapia with golden fries and tartar sauce.",
    price: "KSh 720",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80",
  },
  {
    cat: "lunch",
    badge: "Bestseller",
    title: "Vegetable Stir Fry",
    desc: "Fresh seasonal vegetables in ginger-garlic sauce with jasmine rice.",
    price: "KSh 520",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
  },

  // Main Course Items
  {
    cat: "mains",
    badge: "Chef's Pick",
    title: "Coconut Prawn Curry",
    desc: "Tiger prawns in spiced coconut milk, served with basmati rice.",
    price: "KSh 950",
    img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400&q=80",
  },
  {
    cat: "mains",
    title: "Grilled Tilapia",
    desc: "Fresh Lake Victoria tilapia with kachumbari and ugali.",
    price: "KSh 780",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80",
  },
  {
    cat: "mains",
    badge: "Bestseller",
    title: "Nyama Choma Platter",
    desc: "Charcoal-grilled beef with ugali, chips, and piri sauce.",
    price: "KSh 860",
    img: "https://images.unsplash.com/photo-1504674900910-48f4dc8e2b8e?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1555939594-58d7cb561af1?w=400&q=80",
  },
  {
    cat: "mains",
    title: "Coastal Fish Stew",
    desc: "Mixed seafood in tomato broth with fresh herbs and crusty bread.",
    price: "KSh 920",
    img: "https://images.unsplash.com/photo-1474924109f23-cdc568760f1c?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
  },
  {
    cat: "mains",
    title: "Spiced Lamb Biryani",
    desc: "Fragrant basmati rice with tender lamb, cardamom, and cinnamon.",
    price: "KSh 850",
    img: "https://images.unsplash.com/photo-1585238341710-4a4a7a4caea7?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
  },
  {
    cat: "mains",
    title: "Tamarind Chicken",
    desc: "Slow-roasted chicken in tangy tamarind glaze with vegetables.",
    price: "KSh 720",
    img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1555939594-58d7cb561af1?w=400&q=80",
  },
  {
    cat: "mains",
    title: "Mkate Wa Zanzibar",
    desc: "Spiced bread, vegetable curry, and pickled mango chutney.",
    price: "KSh 520",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&q=80",
  },
  {
    cat: "mains",
    badge: "New",
    title: "Lentil & Spinach Curry",
    desc: "Creamy lentil curry with fresh spinach, served with warm naan.",
    price: "KSh 480",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&q=80",
  },
  {
    cat: "mains",
    title: "Octopus in Garlic Oil",
    desc: "Tender octopus marinated in garlic, chilli, and herbs.",
    price: "KSh 980",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1555939594-58d7cb561af1?w=400&q=80",
  },
  {
    cat: "mains",
    title: "Beef Steak with Coffee Rub",
    desc: "Prime beef steak rubbed with coffee and spices, served rare.",
    price: "KSh 1050",
    img: "https://images.unsplash.com/photo-1504674900910-48f4dc8e2b8e?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1555939594-58d7cb561af1?w=400&q=80",
  },

  // Dessert Items
  {
    cat: "desserts",
    badge: "New",
    title: "Mango Panna Cotta",
    desc: "Silky vanilla panna cotta with fresh mango coulis and mint.",
    price: "KSh 380",
    img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",
  },
  {
    cat: "desserts",
    title: "Dark Chocolate Fondant",
    desc: "Warm molten chocolate cake with vanilla ice cream.",
    price: "KSh 420",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",
  },
  {
    cat: "desserts",
    badge: "Chef's Pick",
    title: "Coconut Cream Pie",
    desc: "Toasted coconut crust with silky cream filling and toasted flakes.",
    price: "KSh 350",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",
  },
  {
    cat: "desserts",
    title: "Passion Fruit Mousse",
    desc: "Light and fluffy passion fruit mousse with candied fruit.",
    price: "KSh 320",
    img: "https://images.unsplash.com/photo-1535920527894-b8b1b1a7d07f?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",
  },
  {
    cat: "desserts",
    title: "Banana Bread Pudding",
    desc: "Warm bread pudding with banana, bourbon sauce, and cream.",
    price: "KSh 360",
    img: "https://images.unsplash.com/photo-1567273283322-c35f8c96b799?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",
  },
  {
    cat: "desserts",
    title: "Matcha Tiramisu",
    desc: "Traditional tiramisu infused with earthy matcha green tea.",
    price: "KSh 400",
    img: "https://images.unsplash.com/photo-1517701550927-30cf4ba20d4d?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",
  },
  {
    cat: "desserts",
    title: "Mini Fruit Tartlets",
    desc: "Crispy pastry shells filled with custard and fresh berries.",
    price: "KSh 380",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",
  },
  {
    cat: "desserts",
    badge: "Bestseller",
    title: "Caramel Cheesecake",
    desc: "Creamy cheesecake with salted caramel swirl and biscuit base.",
    price: "KSh 420",
    img: "https://images.unsplash.com/photo-1533134242443-742a28cc2678?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",
  },
  {
    cat: "desserts",
    title: "Hazelnut Chocolate Torte",
    desc: "Decadent chocolate layers with roasted hazelnut cream.",
    price: "KSh 450",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",
  },
  {
    cat: "desserts",
    title: "Pistachio Macarons",
    desc: "Delicate French macarons with pistachio cream filling.",
    price: "KSh 340",
    img: "https://images.unsplash.com/photo-1569718212c5-ca8cf5c1dcc1?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",
  },

  // Drink Items
  {
    cat: "drinks",
    badge: "Best Seller",
    title: "Signature Cold Brew",
    desc: "18-hour steeped Kenyan single-origin, served over ice.",
    price: "KSh 280",
    img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
  },
  {
    cat: "drinks",
    title: "Hibiscus Lemonade",
    desc: "Fresh hibiscus flowers, lemon, honey — refreshingly floral.",
    price: "KSh 220",
    img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&q=80",
  },
  {
    cat: "drinks",
    badge: "Popular",
    title: "Mango Lassi",
    desc: "Smooth yogurt drink with fresh mango pulp and cardamom.",
    price: "KSh 200",
    img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&q=80",
  },
  {
    cat: "drinks",
    title: "Ginger & Turmeric Latte",
    desc: "Warming blend of ginger, turmeric, cinnamon, and milk.",
    price: "KSh 240",
    img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
  },
  {
    cat: "drinks",
    title: "Fresh Papaya Smoothie",
    desc: "Creamy papaya blended with coconut milk and lime.",
    price: "KSh 210",
    img: "https://images.unsplash.com/photo-1553265381-51a46d4c4d64?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
  },
  {
    cat: "drinks",
    badge: "New",
    title: "Activated Charcoal Lemonade",
    desc: "Detoxifying charcoal lemonade with fresh mint.",
    price: "KSh 250",
    img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&q=80",
  },
  {
    cat: "drinks",
    title: "Iced Lemongrass Tea",
    desc: "Refreshing lemongrass steeped cold with honey and ginger.",
    price: "KSh 190",
    img: "https://images.unsplash.com/photo-1597318086893-f1ff1b773b87?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
  },
  {
    cat: "drinks",
    title: "Chocolate Espresso Shake",
    desc: "Rich chocolate shake with shot of espresso and whipped cream.",
    price: "KSh 320",
    img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
  },
  {
    cat: "drinks",
    title: "Pomegranate Mint Cooler",
    desc: "Tart pomegranate juice with fresh mint and sparkling water.",
    price: "KSh 230",
    img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&q=80",
  },
  {
    cat: "drinks",
    title: "Watermelon Basil Refresher",
    desc: "Sweet watermelon with basil leaves and lime juice.",
    price: "KSh 200",
    img: "https://images.unsplash.com/photo-1553265381-51a46d4c4d64?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&q=80",
  },
];

// Helper functions to get items by category
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
