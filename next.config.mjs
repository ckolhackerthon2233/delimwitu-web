/** Next.js config. Defaults used; add images.domains or other options here if needed. */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Temporarily disabled to stabilize Leaflet initialization
  images: {
    domains: ['i.pravatar.cc', 'images.unsplash.com'],
  },
};

export default nextConfig;
