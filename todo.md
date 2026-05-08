# Menu Redesign TODO (ArtCafe-inspired structure)

## Current Work
Redesigning app/menu folder: Top-level /menu (Food/Drinks/Bakery collections) → subpages like /menu/food (breakfast, starters, bowls-salads, lunch-dinner, burgers, pizza).

## Steps
- [x] Create TODO.md
- [x] 1. Delete redundant subfolders: app/menu/{breakfast,desserts,drinks,food,lunch,mains,sides}/ ✓
- [x] 2. Update data/menuData.ts: Add/enhance subcategory field, helpers ✓ (full data + helpers created)
- [x] 3. Update app/menu/page.tsx: Filters ["food","drinks","bakery"] ✓ (filters, hero updated)
- [x] 4. Create app/menu/food/page.tsx ✓
- [x] 5. Create app/menu/drinks/page.tsx ✓
- [x] 6. Create app/menu/bakery/page.tsx ✓
- [x] 7. Update components/MenuGrid.tsx ✓ (Next/Image + new paths)

- [ ] 2. Update data/menuData.ts: Add/enhance subcategory field (e.g., 'starters','bowls-salads'), update helpers for new groupings (food: breakfast/lunch/mains, bakery: desserts)
- [ ] 3. Update app/menu/page.tsx: Filters ["food","drinks","bakery"], group items by top-level collection
- [ ] 4. Create app/menu/food/page.tsx: Hero "Food Menu", subfilters ["all","breakfast","starters","bowls-salads","lunch-dinner","burgers","pizza"]
- [ ] 5. Create/Update app/menu/drinks/page.tsx: Subfilters for drink types
- [ ] 6. Create app/menu/bakery/page.tsx: Desserts as bakery
- [ ] 7. Update components/MenuGrid.tsx: Use Next/Image, new link paths /menu/food/{subcat}/{itemId}
- [ ] 8. Update components/Menu.tsx (home): Links to new /menu/food etc.
- [ ] 9. Ensure app/menu/[id]/page.tsx works for details (update param handling)
- [ ] 10. Test: npm run dev, navigate /menu → /menu/food → item details, check filters/images

## Key Technical Concepts
- Next.js App Router (page.tsx for routes)
- Client components ("use client")
- Tailwind CSS (gradients, responsive grids)
- menuData.ts array filtering/grouping
- Dynamic routes [id]

## Relevant Files
- app/menu/* (target for restructure)
- data/menuData.ts (data source)
- components/{MenuGrid,FilterButton,Menu}.tsx (rendering)
