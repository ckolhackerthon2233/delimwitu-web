import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Clear existing data
  await prisma.reservation.deleteMany({});
  await prisma.branch.deleteMany({});

  // Create branches
  const branches = await prisma.branch.createMany({
    data: [
      {
        name: "Delimwitu Cafe Mombasa",
        address: "Old Town, Mombasa Road, Near Fort Jesus",
        phone: "+254 701 234 567",
        email: "mombasa@delimwitu.com",
        openTime: "7:00 AM",
        closeTime: "11:00 PM",
        capacity: 120,
      },
      {
        name: "Delimwitu Cafe Nyali",
        address: "Nyali Centre, Nyali Road, Mombasa",
        phone: "+254 702 345 678",
        email: "nyali@delimwitu.com",
        openTime: "7:00 AM",
        closeTime: "11:00 PM",
        capacity: 100,
      },
      {
        name: "Delimwitu Cafe Nairobi CBD",
        address: "CBD Centre, Kikuyu Street, Nairobi",
        phone: "+254 703 456 789",
        email: "nairobi-cbd@delimwitu.com",
        openTime: "7:00 AM",
        closeTime: "11:00 PM",
        capacity: 150,
      },
      {
        name: "Delimwitu Cafe Westlands",
        address: "Westlands Plaza, Mpesi Lane, Nairobi",
        phone: "+254 704 567 890",
        email: "westlands@delimwitu.com",
        openTime: "7:00 AM",
        closeTime: "11:00 PM",
        capacity: 130,
      },
      {
        name: "Delimwitu Cafe Kilimani",
        address: "Kilimani Centre, Bogani Road, Nairobi",
        phone: "+254 705 678 901",
        email: "kilimani@delimwitu.com",
        openTime: "7:00 AM",
        closeTime: "11:00 PM",
        capacity: 90,
      },
      {
        name: "Delimwitu Cafe Karen",
        address: "Karen Shopping Centre, Karen Road, Nairobi",
        phone: "+254 706 789 012",
        email: "karen@delimwitu.com",
        openTime: "7:00 AM",
        closeTime: "11:00 PM",
        capacity: 110,
      },
      {
        name: "Delimwitu Cafe Kisumu",
        address: "Kisumu Town Centre, Kenya Street, Kisumu",
        phone: "+254 707 890 123",
        email: "kisumu@delimwitu.com",
        openTime: "7:00 AM",
        closeTime: "11:00 PM",
        capacity: 80,
      },
    ],
  });

  console.log(`✓ Created ${branches.count} branches`);
  console.log("✓ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
