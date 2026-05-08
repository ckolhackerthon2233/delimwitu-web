import About from "@/components/About";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-white to-warm-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 bg-gradient-to-r from-dark-brown to-orange">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-6xl md:text-7xl font-black mb-6">About Delimwitu</h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90">
            Our Market story, people, and bakery.
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Learn how Delimwitu blends great food, warm hospitality and inspired
            market experiences for every guest.
          </p>
        </div>
      </div>

      {/* About Content */}
      <About />
    </div>
  );
}