"use client";

export default function Team() {
  const team = [
    {
      name: "Chef Wildan Wari",
      role: "Head Chef & Founder",
      bio: "15 years of culinary mastery. Wildan trained in Cape Town and Nairobi before bringing his vision of coastal fusion cuisine home to Mombasa.",
      image: "/menu/starters/art-wings-large-02_180x.png",
      fallback: "/hero/plate.png",
    },
    {
      name: "Aisha Baraka",
      role: "Pastry Chef",
      bio: "A self-taught baker who turned her grandmother's recipes into a celebrated dessert menu loved by locals and visitors alike.",
      image: "/menu/everydayclassic/mango-granola-bowl-01.png",
      fallback: "/hero/plate.png",
    },
    {
      name: "Marco Njoroge",
      role: "Head Barista",
      bio: "Kenya's 2023 Regional Barista Champion. Marco sources single-origin beans from Mt. Kenya slopes and crafts each cup as a work of art.",
      image: "/hero/coffee.png",
      fallback: "/hero/plate.png",
    },
  ];

  return (
    <section id="team" className="py-24 bg-cream max-md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-md:mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange mb-4">The People</span>
          <h2 className="text-4xl font-bold text-dark-brown max-md:text-3xl">Meet Our Team</h2>
          <div className="h-0.75 w-15 bg-orange mx-auto rounded my-6"></div>
          <p className="max-w-lg mx-auto text-base text-gray-700">Passionate individuals who pour heart and soul into every dish and cup.</p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="text-center">
              <div className="mb-6 h-48 md:h-72 rounded-lg overflow-hidden shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = member.fallback;
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold text-dark-brown mb-2">{member.name}</h3>
              <div className="text-sm font-medium text-orange mb-3">{member.role}</div>
              <p className="text-sm text-gray-700 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
