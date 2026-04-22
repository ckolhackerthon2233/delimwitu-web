import tailwindcssAnimate from "tailwindcss-animate";

/** Tailwind config: content paths, theme (colors, fonts, backgrounds, shadows), tailwindcss-animate for Radix open/close. */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
    "./types/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    colors: {
      body: "#FDFAF5",
      white: "#fff",
      cream: "#FDFAF5",
      "warm-white": "#FFF9F0",
      sand: "#F5EDD8",
      tan: "#E8D5B0",
      brown: "#8B5E3C",
      "dark-brown": "#3D1F0D",
      espresso: "#1a1208",
      orange: {
        DEFAULT: "#E8703A",
        light: "#F5956A",
        hover: "#d4602e",
      },
      green: {
        DEFAULT: "#3B6B4A",
        light: "#5A8F6A",
      },
      gold: "#C9963E",
      grey: "#888888",
      black: { DEFAULT: "#273029", heavy: "#1b211c" },
      outline: "#f1f1f1",
      pink: "#ffa5a5",
    },
    extend: {
      fontFamily: {
        lora: ["var(--font-lora)", "Lora", "serif"],
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
      backgroundImage: {
        hero: "url(/hero/bg.png)",
        menu: "url(/menu/bg.png)",
        reservation: "url(/reservation/bg.png)",
        footer: "url(/footer/bg.png)",
      },
      boxShadow: {
        primary: "40px 4px 40px 0px rgba(68, 68, 68, 0.25)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
