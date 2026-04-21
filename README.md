# Deli MWitu | Restaurant Website with Online Ordering - Next.js, TypeScript, TailwindCSS, Framer Motion

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF)](https://www.framer.com/motion/)

A modern, responsive restaurant website built with Next.js 15, TypeScript, TailwindCSS, and Framer Motion. Features include user authentication, full menu display, cruise-through ordering, online ordering via WhatsApp, reservations, and more.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features & Functionality](#features--functionality)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation & How to Run](#installation--how-to-run)
- [Environment Variables](#environment-variables)
- [Routes & Navigation](#routes--navigation)
- [Components Walkthrough](#components-walkthrough)
- [Libraries & Dependencies](#libraries--dependencies)
- [Reusing Components](#reusing-components)
- [Deployment](#deployment)
- [Keywords](#keywords)
- [Conclusion](#conclusion)
- [License](#license)

---

## Project Overview

**Deli MWitu** is a multi-page restaurant website with user authentication, menu browsing, cruise-through ordering, online ordering via WhatsApp, table reservations, about section, contact section, and a footer. It is built with the **Next.js 15 App Router**, **TypeScript**, **TailwindCSS**, and **Framer Motion**. The app supports user login/registration, menu management, order placement through WhatsApp integration, and reservation booking.

---

## Features & Functionality

**Core features:**

- **Authentication** – User login and registration system with email/password authentication, session management, and protected routes for authenticated users only.
- **Hero section** – Full-width hero with headline, subtitle, and imagery. Uses Framer Motion for fade-in animations keyed to scroll.
- **Menu section** – Complete menu display with categories (appetizers, main courses, desserts, beverages). Grid of dishes with images, titles, descriptions, and prices. Add to cart functionality and WhatsApp order integration.
- **Cruise-Through** – Drive-through ordering feature that allows customers to order ahead and pick up their orders at the restaurant location. Includes dedicated cruise-through menu, order tracking, and estimated pickup time.
- **Online Ordering via WhatsApp** – Floating WhatsApp icon for quick order placement. Customers can send their cart directly to the restaurant via WhatsApp API with pre-formatted message containing order details.
- **Reservation section** – Table reservation form with date picker, time selection, party size, and special requests. Confirmation display after submission.
- **About section** – Two-column layout (text + image) with scroll-triggered animations showcasing the restaurant story.
- **Contact section** – Contact form, restaurant location, phone number, email, and operating hours.
- **Floating WhatsApp Button** – Fixed position WhatsApp icon in the bottom-right corner that opens WhatsApp with pre-filled message template for ordering.
- **Shopping Cart** – Cart management system with add/remove items, quantity adjustment, and order total calculation.
- **User Dashboard** – Protected dashboard for authenticated users to view order history and manage account.
- **Header** – Fixed nav with logo, desktop nav links, authentication buttons (Login/Register or Profile/Logout), and mobile menu.
- **Footer** – Logo, link columns (Home, Menu, Cruise-Through, About, Contact), social media links, and copyright.
- **Authentication** - User login and registration system with email/password authentication, session management, and protected routes for authenticated users only.
- **Hero section** - Full-width hero with headline, subtitle, and imagery. Uses Framer Motion for fade-in animations keyed to scroll.
- **Menu section** - Complete menu display with categories (appetizers, main courses, desserts, beverages). Grid of dishes with images, titles, descriptions, and prices. Add to cart functionality and WhatsApp order integration.
- **Cruise-Through** - Drive-through ordering feature that allows customers to order ahead and pick up their orders at the restaurant location. Includes dedicated cruise-through menu, order tracking, and estimated pickup time.
- **Online Ordering via WhatsApp** - Floating WhatsApp icon for quick order placement. Customers can send their cart directly to the restaurant via WhatsApp API with pre-formatted message containing order details.
- **Reservation section** - Table reservation form with date picker, time selection, party size, and special requests. Confirmation display after submission.
- **About section** - Two-column layout (text + image) with scroll-triggered animations showcasing the restaurant story.
- **Contact section** - Contact form, restaurant location, phone number, email, and operating hours.
- **Floating WhatsApp Button** - Fixed position WhatsApp icon in the bottom-right corner that opens WhatsApp with pre-filled message template for ordering.
- **Shopping Cart** - Cart management system with add/remove items, quantity adjustment, and order total calculation.
- **User Dashboard** - Protected dashboard for authenticated users to view order history and manage account.
- **Header** - Fixed nav with logo, desktop nav links, authentication buttons (Login/Register or Profile/Logout), and mobile menu.
- **Footer** - Logo, link columns (Home, Menu, Cruise-Through, About, Contact), social media links, and copyright.

**Technical behaviour:**

- **Multi-route** – Multiple routes including `/` (home), `/menu`, `/cruise-through`, `/reservation`, `/about`, `/contact`, `/login`, `/register`, `/dashboard`.
- **Authentication** – Session-based auth with protected dashboard route.
- **Client components** – Interactive pieces use `"use client"` (Header, Hero, Menu, CruiseThrough, Reservation, About, Contact, Footer, Nav, NavMobile, WhatsAppButton, Cart, AuthForms).
- **WhatsApp Integration** – Floating button uses WhatsApp API URL scheme to open WhatsApp with pre-formatted order message.
mpesa intergration to be added with that of the prompting pos system
- **SEO** – Metadata (title, description, keywords, Open Graph, Twitter, icons, author) is set in `app/layout.tsx` and per-page metadata in each route.
- **Multi-route** - Multiple routes including `/` (home), `/menu`, `/cruise-through`, `/reservation`, `/about`, `/contact`, `/login`, `/register`, `/dashboard`.
- **Authentication** - Session-based auth with protected dashboard route.
- **Client components** - Interactive pieces use `"use client"` (Header, Hero, Menu, CruiseThrough, Reservation, About, Contact, Footer, Nav, NavMobile, WhatsAppButton, Cart, AuthForms).
- **WhatsApp Integration** - Floating button uses WhatsApp API URL scheme to open WhatsApp with pre-formatted order message.
- **SEO** - Metadata (title, description, keywords, Open Graph, Twitter, icons, author) is set in `app/layout.tsx` and per-page metadata in each route.

---

## Technology Stack

| Layer         | Technology                                                                               |
| ------------- | ---------------------------------------------------------------------------------------- |
| Framework     | Next.js 15 (App Router)                                                                  |
| Language      | TypeScript 5.6                                                                           |
| UI            | React 18.3                                                                               |
| Styling       | TailwindCSS 3.4, tailwindcss-animate                                                     |
| Fonts         | Next.js Google Fonts (Lora, Poppins)                                                     |
| Animation     | Framer Motion 11                                                                         |
| Authentication| NextAuth.js                                                                             |
| State Management| React Context + useReducer                                              |
| Icons         | Lucide React, React Icons                                                                |
| Utilities     | clsx, tailwind-merge, class-variance-authority, date-fns, react-scroll, react-responsive |
| Layer           | Technology                                                                    |
| -------------- | ----------------------------------------------------------------------------- |
| Framework      | Next.js 15 (App Router)                                                         |
| Language       | TypeScript 5.6                                                                  |
| UI             | React 18.3                                                                      |
| Styling        | TailwindCSS 3.4, tailwindcss-animate                                            |
| Fonts          | Next.js Google Fonts (Lora, Poppins)                                             |
| Animation     | Framer Motion 11                                                                |
| Authentication| NextAuth.js                                                                     |
| State Management| React Context + useReducer                                                       |
| Icons          | Lucide React, React Icons                                                        |
| Utilities     | clsx, tailwind-merge, class-variance-authority, date-fns, react-scroll           |

---

## Project Structure

```bash
delimwitu/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, global styles, auth provider
│   ├── page.tsx           # Home page
│   ├── globals.css        # Tailwind directives + base styles
│   ├── favicon.ico        # Site favicon
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx   # Login page
│   │   └── register/
│   │       └── page.tsx  # Registration page
│   ├── layout.tsx              # Root layout, fonts, metadata, auth/cart providers
│   ├── page.tsx               # Home page
│   ├── globals.css            # Tailwind directives + base styles
│   ├── favicon.ico           # Site favicon
│   ├── login/
│   │   └── page.tsx          # Login page
│   ├── register/
│   │   └── page.tsx         # Registration page
│   ├── menu/
│   │   └── page.tsx      # Full menu page
│   │   └── page.tsx         # Full menu page
│   ├── cruise-through/
│   │   └── page.tsx      # Cruise-through ordering page
│   │   └── page.tsx         # Cruise-through ordering page
│   ├── reservation/
│   │   └── page.tsx      # Reservation page
│   │   └── page.tsx         # Reservation page
│   ├── about/
│   │   └── page.tsx      # About page
│   │   └── page.tsx         # About page
│   ├── contact/
│   │   └── page.tsx      # Contact page
│   │   └── page.tsx         # Contact page
│   ├── dashboard/
│   │   └── page.tsx     # User dashboard (protected)
│   │   └── page.tsx         # User dashboard (protected)
│   └── api/
│       ├── auth/
│       │   └── [...nextauth]/
│       │       └── route.ts # NextAuth API route
│       │       └── route.ts    # NextAuth API route
│       └── orders/
│           └── route.ts # Orders API route
│           └── route.ts      # Orders API route
├── components/
│   ├── Header.tsx        # Fixed header, logo, nav, auth buttons, mobile menu
│   ├── Hero.tsx          # Hero section with motion animations
│   ├── MenuGrid.tsx     # Menu grid display (data from data/menu.ts)
│   ├── MenuItem.tsx     # Individual menu item card
│   ├── CruiseThrough.tsx # Cruise-through section wrapper
│   ├── Reservation.tsx   # Reservation section wrapper
│   ├── ReservationForm.tsx # Form: name, date picker, time, party size
│   ├── About.tsx        # About section (text + image)
│   ├── Contact.tsx      # Contact section with form
│   ├── ContactForm.tsx  # Contact form component
│   ├── Footer.tsx       # Footer with links and copyright
│   ├── Nav.tsx          # Desktop nav links
│   ├── NavMobile.tsx     # Mobile menu with icons
│   ├── WhatsAppButton.tsx # Floating WhatsApp order button
│   ├── Cart.tsx         # Shopping cart sidebar/modal
│   ├── CartItem.tsx     # Individual cart item
│   ├── AuthForm.tsx     # Login/Register form
│   ├── UserMenu.tsx     # User dropdown menu
│   └── ui/              # Reusable UI primitives
│   ├── Header.tsx            # Fixed header, logo, nav, auth buttons, mobile menu
│   ├── Hero.tsx              # Hero section with motion animations
│   ├── Menu.tsx              # Menu grid display
│   ├── MenuItem.tsx          # Individual menu item card
│   ├── CruiseThrough.tsx    # Cruise-through section wrapper
│   ├── Reservation.tsx      # Reservation section wrapper
│   ├── ReservationForm.tsx   # Form: name, date picker, time, party size
│   ├── About.tsx            # About section (text + image)
│   ├── Contact.tsx          # Contact section with form
│   ├── ContactForm.tsx     # Contact form component
│   ├── Footer.tsx           # Footer with links and copyright
│   ├── Nav.tsx              # Desktop nav links
│   ├── NavMobile.tsx        # Mobile menu with icons
│   ├── WhatsAppButton.tsx   # Floating WhatsApp order button
│   ├── Cart.tsx             # Shopping cart sidebar/modal
│   ├── CartItem.tsx          # Individual cart item
│   ├── AuthForm.tsx          # Login/Register form
│   ├── UserMenu.tsx          # User dropdown menu
│   └── ui/                   # Reusable UI primitives
│       ├── button.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── select.tsx
│       ├── popover.tsx
│       ├── calendar.tsx
│       ├── modal.tsx
│       └── badge.tsx
├── contexts/
│   ├── AuthContext.tsx  # Authentication context provider
│   └── CartContext.tsx   # Cart context provider
│   ├── AuthContext.tsx       # Authentication context provider
│   └── CartContext.tsx      # Cart context provider
├── data/
│   ├── menu.ts          # Menu items (id, name, description, price, category, image)
│   ├── navLinks.ts     # Desktop nav links (path, name, offset)
│   ├── navMobileLinks.tsx # Mobile nav links with icons
│   └── categories.ts   # Menu categories
│   ├── menu.ts              # Menu items (id, name, description, price, category, image)
│   ├── navLinks.ts        # Desktop nav links
│   ├── navMobileLinks.tsx   # Mobile nav links with icons
│   └── categories.ts    # Menu categories
├── lib/
│   ├── utils.ts        # cn() – merge Tailwind classes
│   ├── variants.ts    # Framer Motion fadeIn variants
│   └── auth.ts       # Auth utilities
│   ├── utils.ts           # cn() - merge Tailwind classes
│   ├── variants.ts       # Framer Motion fadeIn variants
│   └── auth.ts         # Auth utilities
├── types/
│   ├── index.ts        # MenuItem, CartItem, User, NavLinkConfig, etc.
│   ├── index.ts         # MenuItem, CartItem, User, NavLinkConfig, etc.
│   └── next-auth.d.ts  # Type declaration for NextAuth
├── public/             # Static assets (images, icons)
├── public/              # Static assets (images, icons)
├── next.config.mjs
├── tailwind.config.js
├── tsconfig.json
├── middleware.ts       # Auth middleware for protected routes
├── .env.local         # Environment variables
└── package.json
```

---

## Installation & How to Run

**Prerequisites:** Node.js 18+ and npm (or yarn/pnpm).

**Steps:**

1. Clone the repository and go into the project folder:

   ```bash
   git clone <repository-url>
   cd delimwitu
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   Create a `.env.local` file in the project root and add:

   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. Other scripts:
   - **Build:** `npm run build` – production build.
   - **Start:** `npm run start` – run the production build locally.
   - **Lint:** `npm run lint` – run ESLint (Next.js config).
   - **Build:** `npm run build` - production build.
   - **Start:** `npm run start` - run the production build locally.
   - **Lint:** `npm run lint` - run ESLint (Next.js config).

---

## Environment Variables

**Required environment variables:**

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
```

**Optional environment variables:**

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
NEXT_PUBLIC_RESTAURANT_NAME=Deli MWitu
NEXT_PUBLIC_RESTAURANT_ADDRESS=123 Restaurant Street
NEXT_PUBLIC_RESTAURANT_PHONE=+1234567890
NEXT_PUBLIC_RESTAURANT_EMAIL=info@delimwitu.com
```

---

## Routes & Navigation

- **/** – Home page with Hero, Featured Menu items, Cruise-Through preview, About preview.
- **/menu** – Full menu page with categories, search, and filter.
- **/cruise-through** – Cruise-through ordering page with menu and pickup time selection.
- **/reservation** – Table reservation page with date/time/party size selection.
- **/about** – About page with restaurant story and images.
- **/contact** – Contact page with form and location details.
- **/login** – Login page for returning users.
- **/register** – Registration page for new users.
- **/dashboard** – User dashboard (protected, requires authentication).
- **/** - Home page with Hero, Featured Menu items, Cruise-Through preview, About preview.
- **/menu** - Full menu page with categories, search, and filter.
- **/cruise-through** - Cruise-through ordering page with menu and pickup time selection.
- **/reservation** - Table reservation page with date/time/party size selection.
- **/about** - About page with restaurant story and images.
- **/contact** - Contact page with form and location details.
- **/login** - Login page for returning users.
- **/register** - Registration page for new users.
- **/dashboard** - User dashboard (protected, requires authentication).

**In-page navigation:** Links in the header use smooth scrolling to section IDs on the home page.

---

## Components Walkthrough

**app/layout.tsx**  
Root layout: loads Lora and Poppins via `next/font/google`, applies `globals.css`, wraps app in AuthProvider and CartProvider, and exports metadata.

**app/page.tsx**  
Server component that composes the home page: Header, Hero, FeaturedMenu, CruiseThroughPreview, About, Footer inside a `<main>` container.

**Header**  
Client component. Tracks scroll position; toggles header background. Renders logo, desktop Nav, auth buttons (Login/Register or Profile/Logout), and NavMobile.

**Hero**  
Hero block with headline, byline, and CTA. Uses Framer Motion for scroll-triggered animations.

**MenuGrid**  
**Menu**  
Reads menu items from `data/menu.ts` and renders a responsive grid with category filtering. Each item shows image, title, description, price, and Add to Cart button.

**MenuItem**  
Individual menu item with image, name, description, price, category badge, and action buttons.

**CruiseThrough**  
Dedicated cruise-through ordering section with menu, order preparation time, and pickup scheduling.

**Reservation & ReservationForm**  
Reservation page with date picker, time slots, party size, and special requests. Shows confirmation after submission.

**About**  
Two-column layout (text + image) with motion variants.

**Contact & ContactForm**  
Contact page with contact form, location map, phone, email, and operating hours.

**WhatsAppButton**  
Fixed position button in bottom-right corner. Opens WhatsApp with pre-formatted order message containing cart items and total.

**Cart**  
Slide-out cart panel with item list, quantity controls, remove buttons, and total. Includes "Order via WhatsApp" button.

**AuthForm**  
Combined login/register form with email and password fields.

**Footer**  
Footer with logo, link groups, social links, and copyright.

**components/ui/**  
Reusable primitives built on Radix and styled with Tailwind.

---

## Libraries & Dependencies

**Next.js 15** – React framework with App Router, file-based routing.
**Next.js 15** - React framework with App Router, file-based routing.

**React 18 & TypeScript** – UI library and typed JavaScript.
**React 18 & TypeScript** - UI library and typed JavaScript.

**TailwindCSS** – Utility-first CSS.
**TailwindCSS** - Utility-first CSS.

**Framer Motion** – Declarative animations.
**Framer Motion** - Declarative animations.

**NextAuth.js** – Authentication solution for Next.js.
**NextAuth.js** - Authentication solution for Next.js.

**Radix UI** – Accessible primitives.
**Radix UI** - Accessible primitives.

**Lucide React** – Icon library.
**Lucide React** - Icon library.

**date-fns** – Date formatting.
**date-fns** - Date formatting.

---

## Reusing Components

You can copy individual components or the whole structure into another Next.js (App Router) project.

**Example – reuse WhatsAppButton:**
**Example - reuse WhatsAppButton:**

1. Copy `components/WhatsAppButton.tsx`.
2. Copy `lib/utils.ts` (for cn() helper).
3. Ensure Tailwind is configured.
4. Add `NEXT_PUBLIC_WHATSAPP_NUMBER` to env.
5. Use `<WhatsAppButton />` in your layout or page.

**Example – reuse Cart:**
**Example - reuse Cart:**

1. Copy `components/Cart.tsx`, `components/CartItem.tsx`.
2. Copy `contexts/CartContext.tsx`.
3. Copy `types/index.ts` (CartItem type).
4. Wrap your app in CartProvider.
5. Use `<Cart />` in your layout.

---

## Deployment

**Vercel (recommended):**

1. Push the repo to GitHub.
2. In Vercel, create a new project and import the repository.
3. Add environment variables in Vercel project settings.
4. Deploy. The live URL will be something like `https://<project>.vercel.app`.

**Other platforms:** Use `npm run build` and `npm run start`, or follow your host's guide for Next.js.

---

## Keywords

restaurant, food delivery, online ordering, WhatsApp ordering, cruise-through, drive-through, table reservation, menu, Deli MWitu, restaurant website, food menu, book table, restaurant reservation, local food, modern restaurant, fine dining, gourmet food, restaurant menu, online reservation, restaurant booking, Next.js, React, TypeScript, TailwindCSS, Framer Motion, Radix UI, App Router, frontend, open source.

---

## Conclusion

This repository is a **full-featured** restaurant website built with Next.js 15, TypeScript, TailwindCSS, and Framer Motion. It includes user authentication, menu browsing, cruise-through ordering, WhatsApp-based online ordering, table reservations, and more. It can be extended with a backend, CMS, or payment integration later.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

---

