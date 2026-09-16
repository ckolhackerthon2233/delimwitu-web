# Location, Reviews, and Delivery Setup

## Google Maps and Business Profile

The website now consistently identifies the venue as **Delimwitu, Maralal Oasis, Ground Floor, Hurlingham, Nairobi**.

To make that name appear in Google Search and Maps:

1. Open or claim the Google Business Profile for the restaurant.
2. Set the business name to `Delimwitu` and the address to `Maralal Oasis, Ground Floor, Hurlingham, Nairobi`.
3. Add the supplied restaurant entrance image as the profile cover or place photo.
4. Add the phone number and opening hours shown on the website.
5. Request verification, then ask real customers for reviews using the verified profile link.
6. Do not create duplicate listings for the same venue.

The code can improve structured data and map links, but it cannot edit Google Maps, ratings, or reviews without access to the verified business account.

## Uber Eats and Bolt Food

These integrations require merchant onboarding outside the website:

1. Create or claim the restaurant merchant account on Uber Eats for the exact Maralal Oasis address.
2. Create or claim the restaurant merchant account on Bolt Food where coverage is available.
3. Use the same restaurant name, phone number, address, opening hours, logo, and menu prices on both platforms.
4. Confirm delivery radius, prep time, payout details, tax information, and menu availability.
5. Add the resulting order links to the website navigation or footer after approval.

Do not add guessed marketplace URLs. The final links should come from the verified merchant dashboards.

## Performance Work Applied

- Replaced raw `img` elements in the About page and homepage gallery with Next.js `Image`.
- Added responsive `sizes` hints so browsers download appropriately sized images.
- Kept map popup imagery local using `/logo.png` instead of a missing `/map/1.png` path.
- Kept the Google map iframe lazy-loaded.
- Retained Next.js image optimization and long cache settings in `next.config.mjs`.

## Recommended Next Step

After the Google Business Profile and delivery merchant accounts are verified, add their official profile/order URLs to the site and run a Lighthouse or PageSpeed check on mobile. The highest-impact remaining performance improvement is replacing remote Unsplash menu images with compressed local WebP or AVIF files, ideally around 400-800px wide and below 100KB each.
