/**
 * Drinks menu data for Delimwitu Cafe
 * Organized by beverage categories: juices, sodas, syrups, hot beverages, coffee, and porridge
 * Images updated with specific, item-accurate Unsplash photos
 */

import type { MenuItem } from "@/types";

export const drinksData: MenuItem[] = [
  // ============ DRINKS - JUICES ============
  {
    id: "blended-juice-deli",
    cat: "drinks",
    subcategory: "Fresh Juices",
    title: "Blended Juice",
    desc: "Fresh blended fruit juice",
    price: "KES 250",
    img: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "blended-juice-glass",
    cat: "drinks",
    subcategory: "Fresh Juices",
    title: "Blended Juice Glass",
    desc: "Fresh blended juice in glass",
    price: "KES 200",
    img: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "cocktail-juice",
    cat: "drinks",
    subcategory: "Fresh Juices",
    title: "Cocktail Juice",
    desc: "Mixed fruit cocktail juice",
    price: "KES 200",
    img: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "mango-juice",
    cat: "drinks",
    subcategory: "Fresh Juices",
    title: "Mango Juice",
    desc: "Fresh mango juice",
    price: "KES 200",
    img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=400&fit=crop&crop=center",
    badge: "Popular"
  },
  {
    id: "orange-juice",
    cat: "drinks",
    subcategory: "Fresh Juices",
    title: "Orange Juice",
    desc: "Fresh squeezed orange juice",
    price: "KES 150",
    img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "passion-juice-250",
    cat: "drinks",
    subcategory: "Fresh Juices",
    title: "Passion Juice 250ml",
    desc: "Fresh passion fruit juice",
    price: "KES 150",
    img: "https://images.unsplash.com/photo-1560023907-5f339617ea30?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "passion-juice-500",
    cat: "drinks",
    subcategory: "Fresh Juices",
    title: "Passion Juice 500ml",
    desc: "Fresh passion fruit juice large",
    price: "KES 200",
    img: "https://images.unsplash.com/photo-1560023907-5f339617ea30?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "pineapple-mint-250",
    cat: "drinks",
    subcategory: "Fresh Juices",
    title: "Pineapple Mint 250ml",
    desc: "Refreshing pineapple mint juice",
    price: "KES 150",
    img: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "pineapple-mint-500",
    cat: "drinks",
    subcategory: "Fresh Juices",
    title: "Pineapple Mint 500ml",
    desc: "Refreshing pineapple mint juice large",
    price: "KES 250",
    img: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "tamarind-juice",
    cat: "drinks",
    subcategory: "Fresh Juices",
    title: "Tamarind Juice",
    desc: "Tangy tamarind juice",
    price: "KES 150",
    img: "https://images.unsplash.com/photo-1571006682772-338dbd9f2735?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "tropical-juice",
    cat: "drinks",
    subcategory: "Fresh Juices",
    title: "Tropical Juice",
    desc: "Mixed tropical fruit juice",
    price: "KES 150",
    img: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "mursik",
    cat: "drinks",
    subcategory: "Fresh Juices",
    title: "Mursik",
    desc: "Traditional fermented milk",
    price: "KES 120",
    img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop&crop=center"
  },

  // ============ DRINKS - SODAS & PACKAGED JUICES ============
  {
    id: "pick-n-peel-apple",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Pick N Peel Apple",
    desc: "Packaged apple juice",
    price: "KES 100",
    img: "https://images.unsplash.com/photo-1576777911680-6e4a7bf4ff7e?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "pick-n-peel-mango",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Pick N Peel Mango",
    desc: "Packaged mango juice",
    price: "KES 100",
    img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "pick-n-peel-orange",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Pick N Peel Orange",
    desc: "Packaged orange juice",
    price: "KES 100",
    img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "apple-frosty-250",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Apple Frosty 250ml",
    desc: "Frosty apple drink",
    price: "KES 95",
    img: "https://images.unsplash.com/photo-1576777911680-6e4a7bf4ff7e?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "apple-fruitvile-250",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Apple Fruitvile 250ml",
    desc: "Fruitvile apple juice",
    price: "KES 95",
    img: "https://images.unsplash.com/photo-1576777911680-6e4a7bf4ff7e?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "frosti-tropical-250",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Frosti Tropical 250ml",
    desc: "Tropical frosty drink",
    price: "KES 85",
    img: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "mango-frosti-250",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Mango Frosti 250ml",
    desc: "Mango frosty drink",
    price: "KES 85",
    img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "mango-fruitvile-250",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Mango Fruitvile 250ml",
    desc: "Fruitvile mango juice",
    price: "KES 95",
    img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "mirinda-orange-330",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Mirinda Orange 330ml",
    desc: "Mirinda orange soda",
    price: "KES 90",
    img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "pepsi-330",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Pepsi 330ml",
    desc: "Classic Pepsi cola",
    price: "KES 90",
    img: "https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "black-current-300",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Black Current 300ml",
    desc: "Black current soda",
    price: "KES 90",
    img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "coke-300",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Coke 300ml",
    desc: "Classic Coca-Cola",
    price: "KES 90",
    img: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=400&fit=crop&crop=center",
    badge: "Popular"
  },
  {
    id: "fanta-orange-300",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Fanta Orange 300ml",
    desc: "Fanta orange soda",
    price: "KES 90",
    img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "fanta-passion-300",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Fanta Passion 300ml",
    desc: "Fanta passion soda",
    price: "KES 90",
    img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "krest-300",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Krest 300ml",
    desc: "Krest soda",
    price: "KES 90",
    img: "https://images.unsplash.com/photo-1585621386284-8b03b9f64e4d?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "mirinda-300",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Mirinda 300ml",
    desc: "Mirinda orange drink",
    price: "KES 80",
    img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "mountain-dew-300",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Mountain Dew 300ml",
    desc: "Mountain Dew citrus",
    price: "KES 80",
    img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "pepsi-300",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Pepsi 300ml",
    desc: "Classic Pepsi",
    price: "KES 80",
    img: "https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "stoney-tangawizi-300",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Stoney Tangawizi 300ml",
    desc: "Ginger flavored Stoney",
    price: "KES 90",
    img: "https://images.unsplash.com/photo-1585621386284-8b03b9f64e4d?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "sprite-300",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Sprite 300ml",
    desc: "Lemon-lime Sprite",
    price: "KES 90",
    img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "stoney-350",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Stoney 350ml",
    desc: "Stoney ginger ale",
    price: "KES 90",
    img: "https://images.unsplash.com/photo-1585621386284-8b03b9f64e4d?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "fanta-orange-350",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Fanta Orange 350ml",
    desc: "Fanta orange large",
    price: "KES 90",
    img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "coke-350",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Coke 350ml",
    desc: "Coca-Cola large",
    price: "KES 90",
    img: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "black-current-350",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Black Current 350ml",
    desc: "Black current soda large",
    price: "KES 90",
    img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "minute-maid-orange-400",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Minute Maid Orange 400ml",
    desc: "Minute Maid orange juice",
    price: "KES 120",
    img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "minute-maid-tropical-400",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Minute Maid Tropical 400ml",
    desc: "Minute Maid tropical mix",
    price: "KES 120",
    img: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "minute-maid-apple-400",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Minute Maid Apple 400ml",
    desc: "Minute Maid apple juice",
    price: "KES 120",
    img: "https://images.unsplash.com/photo-1576777911680-6e4a7bf4ff7e?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "minute-maid-mango-400",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Minute Maid Mango 400ml",
    desc: "Minute Maid mango juice",
    price: "KES 120",
    img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "fruitville-mango-500",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Fruitville Mango 500ml",
    desc: "Fruitville mango juice",
    price: "KES 120",
    img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "fanta-orange-500",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Fanta Orange 500ml",
    desc: "Fanta orange large",
    price: "KES 120",
    img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "guava-fruitville-500",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Guava Fruitville 500ml",
    desc: "Fruitville guava juice",
    price: "KES 120",
    img: "https://images.unsplash.com/photo-1536408745983-0f03be6e8a5d?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "fanta-passion-500",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Fanta Passion 500ml",
    desc: "Fanta passion large",
    price: "KES 120",
    img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "black-current-500",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Black Current 500ml",
    desc: "Black current soda large",
    price: "KES 120",
    img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "coke-500",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Coke 500ml",
    desc: "Coca-Cola large",
    price: "KES 120",
    img: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "sprite-500",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Sprite 500ml",
    desc: "Sprite large",
    price: "KES 120",
    img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "predator-energy",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Predator Energy",
    desc: "Energy drink",
    price: "KES 120",
    img: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "waba-water-500",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Waba Water 500ml",
    desc: "Mineral water",
    price: "KES 80",
    img: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "coke-zero-500",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Coke Zero 500ml",
    desc: "Sugar-free Coca-Cola",
    price: "KES 120",
    img: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "minute-maid-mango-1l",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Minute Maid Mango 1L",
    desc: "Minute Maid mango large",
    price: "KES 220",
    img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "delmonte-1l",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Delmonte 1L",
    desc: "Delmonte juice large",
    price: "KES 350",
    img: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "minute-maid-apple-1l",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Minute Maid Apple 1L",
    desc: "Minute Maid apple large",
    price: "KES 220",
    img: "https://images.unsplash.com/photo-1576777911680-6e4a7bf4ff7e?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "minute-maid-tropical-1l",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Minute Maid Tropical 1L",
    desc: "Minute Maid tropical large",
    price: "KES 220",
    img: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "pick-n-peel-1l",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Pick N Peel 1L",
    desc: "Pick N Peel juice large",
    price: "KES 350",
    img: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "waba-water-1l",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Waba Water 1L",
    desc: "Mineral water large",
    price: "KES 120",
    img: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "fanta-orange-125",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Fanta Orange 125ml",
    desc: "Fanta orange small",
    price: "KES 200",
    img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "coke-125",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Coke 125ml",
    desc: "Coca-Cola small",
    price: "KES 200",
    img: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "black-current-125",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Black Current 125ml",
    desc: "Black current small",
    price: "KES 200",
    img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "sprite-125",
    cat: "drinks",
    subcategory: "Sodas & Packaged Juices",
    title: "Sprite 125ml",
    desc: "Sprite small",
    price: "KES 200",
    img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&h=400&fit=crop&crop=center"
  },

  // ============ DRINKS - SYRUPS ============
  {
    id: "caramel-syrup",
    cat: "drinks",
    subcategory: "Syrups & Flavors",
    title: "Caramel Syrup",
    desc: "Caramel flavoring syrup",
    price: "KES 50",
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "hazelnut-syrup",
    cat: "drinks",
    subcategory: "Syrups & Flavors",
    title: "Hazelnut Syrup",
    desc: "Hazelnut flavoring syrup",
    price: "KES 50",
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "lime-syrup",
    cat: "drinks",
    subcategory: "Syrups & Flavors",
    title: "Lime Syrup",
    desc: "Lime flavoring syrup",
    price: "KES 50",
    img: "https://images.unsplash.com/photo-1542903660-eedba2cda473?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "peppermint-syrup",
    cat: "drinks",
    subcategory: "Syrups & Flavors",
    title: "Peppermint Syrup",
    desc: "Peppermint flavoring syrup",
    price: "KES 50",
    img: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "vanilla-syrup",
    cat: "drinks",
    subcategory: "Syrups & Flavors",
    title: "Vanilla Syrup",
    desc: "Vanilla flavoring syrup",
    price: "KES 50",
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "coconut-syrup",
    cat: "drinks",
    subcategory: "Syrups & Flavors",
    title: "Coconut Syrup",
    desc: "Coconut flavoring syrup",
    price: "KES 50",
    img: "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?w=400&h=400&fit=crop&crop=center"
  },

  // ============ DRINKS - HOT BEVERAGES ============
  {
    id: "black-masala-tea",
    cat: "drinks",
    subcategory: "Hot Beverages",
    title: "Black Masala Tea",
    desc: "Spiced black tea",
    price: "KES 80",
    img: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "black-tea",
    cat: "drinks",
    subcategory: "Hot Beverages",
    title: "Black Tea",
    desc: "Classic black tea",
    price: "KES 60",
    img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "dawa",
    cat: "drinks",
    subcategory: "Hot Beverages",
    title: "Dawa",
    desc: "Traditional medicinal tea",
    price: "KES 250",
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "hot-chocolate",
    cat: "drinks",
    subcategory: "Hot Beverages",
    title: "Hot Chocolate",
    desc: "Warm hot chocolate",
    price: "KES 120",
    img: "https://images.unsplash.com/photo-1542990253-a781e5f59ae4?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "lemon-tea",
    cat: "drinks",
    subcategory: "Hot Beverages",
    title: "Lemon Tea",
    desc: "Refreshing lemon tea",
    price: "KES 80",
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "hot-milk",
    cat: "drinks",
    subcategory: "Hot Beverages",
    title: "Hot Milk",
    desc: "Warm milk",
    price: "KES 120",
    img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "white-tea",
    cat: "drinks",
    subcategory: "Hot Beverages",
    title: "White Tea",
    desc: "Delicate white tea",
    price: "KES 120",
    img: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "white-masala-tea",
    cat: "drinks",
    subcategory: "Hot Beverages",
    title: "White Masala Tea",
    desc: "Spiced white tea",
    price: "KES 200",
    img: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=400&h=400&fit=crop&crop=center"
  },

  // ============ DRINKS - COFFEE ============
  {
    id: "decaf-cappuccino-d",
    cat: "drinks",
    subcategory: "Coffee",
    title: "Decaf Cappuccino - Double",
    desc: "Decaffeinated double cappuccino",
    price: "KES 370",
    img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "decaf-cappuccino-s",
    cat: "drinks",
    subcategory: "Coffee",
    title: "Decaf Cappuccino - Single",
    desc: "Decaffeinated single cappuccino",
    price: "KES 330",
    img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "decaf-latte-d",
    cat: "drinks",
    subcategory: "Coffee",
    title: "Decaf Latte - Double",
    desc: "Decaffeinated double latte",
    price: "KES 400",
    img: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "espresso-d",
    cat: "drinks",
    subcategory: "Coffee",
    title: "Espresso - Double",
    desc: "Strong double espresso",
    price: "KES 250",
    img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "espresso-s",
    cat: "drinks",
    subcategory: "Coffee",
    title: "Espresso - Single",
    desc: "Strong single espresso",
    price: "KES 230",
    img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "americano-d",
    cat: "drinks",
    subcategory: "Coffee",
    title: "Americano - Double",
    desc: "Double americano",
    price: "KES 250",
    img: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=400&h=400&fit=crop&crop=center",
    badge: "Popular"
  },
  {
    id: "iced-americano",
    cat: "drinks",
    subcategory: "Coffee",
    title: "Iced Americano",
    desc: "Chilled americano",
    price: "KES 300",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "iced-cappuccino",
    cat: "drinks",
    subcategory: "Coffee",
    title: "Iced Cappuccino",
    desc: "Chilled cappuccino",
    price: "KES 350",
    img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "iced-espresso",
    cat: "drinks",
    subcategory: "Coffee",
    title: "Iced Espresso",
    desc: "Chilled espresso",
    price: "KES 300",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "iced-latte",
    cat: "drinks",
    subcategory: "Coffee",
    title: "Iced Latte",
    desc: "Chilled latte",
    price: "KES 350",
    img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "iced-mocha",
    cat: "drinks",
    subcategory: "Coffee",
    title: "Iced Mocha",
    desc: "Chilled mocha",
    price: "KES 350",
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "latte-d",
    cat: "drinks",
    subcategory: "Coffee",
    title: "Latte - Double",
    desc: "Double latte",
    price: "KES 330",
    img: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "latte-s",
    cat: "drinks",
    subcategory: "Coffee",
    title: "Latte - Single",
    desc: "Single latte",
    price: "KES 270",
    img: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "cappuccino-d",
    cat: "drinks",
    subcategory: "Coffee",
    title: "Cappuccino - Double",
    desc: "Double cappuccino",
    price: "KES 290",
    img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "cappuccino-s",
    cat: "drinks",
    subcategory: "Coffee",
    title: "Cappuccino - Single",
    desc: "Single cappuccino",
    price: "KES 250",
    img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "macchiato",
    cat: "drinks",
    subcategory: "Coffee",
    title: "Macchiato",
    desc: "Espresso with milk foam",
    price: "KES 270",
    img: "https://images.unsplash.com/photo-1485808191679-5f86510bd652?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "mocha-d",
    cat: "drinks",
    subcategory: "Coffee",
    title: "Mocha - Double",
    desc: "Double mocha",
    price: "KES 300",
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "mocha-s",
    cat: "drinks",
    subcategory: "Coffee",
    title: "Mocha - Single",
    desc: "Single mocha",
    price: "KES 270",
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "americano-s",
    cat: "drinks",
    subcategory: "Coffee",
    title: "Americano - Single",
    desc: "Single americano",
    price: "KES 230",
    img: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "black-coffee",
    cat: "drinks",
    subcategory: "Coffee",
    title: "Black Coffee",
    desc: "Strong black coffee",
    price: "KES 100",
    img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "white-coffee",
    cat: "drinks",
    subcategory: "Coffee",
    title: "White Coffee",
    desc: "Coffee with milk",
    price: "KES 150",
    img: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "white-decaf",
    cat: "drinks",
    subcategory: "Coffee",
    title: "White Decaf",
    desc: "Decaffeinated coffee with milk",
    price: "KES 230",
    img: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&h=400&fit=crop&crop=center"
  },

  // ============ DRINKS - PORRIDGE/UJI ============
  {
    id: "uji-wimbi",
    cat: "drinks",
    subcategory: "Porridge",
    title: "Uji Wimbi",
    desc: "Traditional finger millet porridge",
    price: "KES 70",
    img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "uji-wimbi-milk",
    cat: "drinks",
    subcategory: "Porridge",
    title: "Uji Wimbi with Milk",
    desc: "Finger millet porridge with milk",
    price: "KES 100",
    img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: "uji-power",
    cat: "drinks",
    subcategory: "Porridge",
    title: "Uji Power",
    desc: "Nutritious power porridge",
    price: "KES 120",
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=400&fit=crop&crop=center"
  },
];