/**
 * Complete menu data for Delimwitu Cafe - All Products with Prices
 * Combines drinks data with food data
 */

import type { MenuItem } from "@/types";
import { slugify } from "@/lib/utils";
import { drinksData } from "./menuDataDrinks";
import { breakfastData } from "./menuDataBreakfast";
import { fishData } from "./menuDataFish";
import { gizzardsData } from "./menuDataGizzards";
import { meatballsData } from "./menuDataMeatballs";
import { beefData } from "./menuDataBeef";
import { goatData } from "./menuDataGoat";
import { chickenData } from "./menuDataChicken";
import { fishFilletData } from "./menuDataFishFillet";
import { beansData } from "./menuDataBeans";
import { startersData } from "./menuDataStarters";
import { bakeryData } from "./menuDataBakery";

export const menuData: MenuItem[] = [
  ...drinksData,
  ...breakfastData,
  ...fishData,
  ...gizzardsData,
  ...meatballsData,
  ...beefData,
  ...goatData,
  ...chickenData,
  ...fishFilletData,
  ...beansData,
  ...startersData,
  ...bakeryData,
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
    return item.cat === topLevel && (!subcat || (item.subcategory ? slugify(item.subcategory) === slugify(subcat) : false));
  });
};
