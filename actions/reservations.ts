"use server";

import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

// Email configuration (using Gmail or any SMTP)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Generate email template with Tailwind
function generateReservationEmailHTML(
  reservation: any,
  branch: any,
  recipientType: "customer" | "restaurant"
) {
  const isAutoConfirmed = reservation.status === "auto_confirmed";
  const statusText = isAutoConfirmed ? "✓ Confirmed" : "⏳ Pending Confirmation";
  const statusColor = isAutoConfirmed ? "bg-green-500" : "bg-yellow-500";

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          * { margin: 0; padding: 0; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5edd8; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 20px 60px rgba(61, 31, 13, 0.16); }
          .header { background: linear-gradient(135deg, #E8703A 0%, #c9963e 100%); padding: 40px 20px; text-align: center; color: white; }
          .header h1 { font-size: 28px; font-weight: 700; margin-bottom: 10px; }
          .status-badge { display: inline-block; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 600; margin-top: 10px; }
          .content { padding: 40px; }
          .content h2 { color: #3D1F0D; font-size: 20px; margin-bottom: 20px; border-bottom: 3px solid #E8703A; padding-bottom: 10px; }
          .detail-row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #f0f0f0; }
          .detail-label { color: #666; font-weight: 600; }
          .detail-value { color: #3D1F0D; font-weight: 500; }
          .section { margin-bottom: 30px; }
          .cta-button { display: inline-block; padding: 14px 28px; background: #E8703A; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 20px; }
          .footer { background: #FDFAF5; padding: 20px; text-align: center; color: #666; font-size: 12px; border-top: 1px solid #e8d5b0; }
          .highlight { background: #fff3e0; padding: 15px; border-left: 4px solid #E8703A; margin: 20px 0; border-radius: 4px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>☕ Delimwitu Cafe</h1>
            <p style="font-size: 16px; margin-bottom: 10px;">Table Reservation Confirmation</p>
            <div class="status-badge" style="background: ${isAutoConfirmed ? "#10b981" : "#f59e0b"}; color: white;">
              ${statusText}
            </div>
          </div>

          <div class="content">
            ${
              recipientType === "customer"
                ? `
              <div class="section">
                <h2>📅 Reservation Details</h2>
                <div class="detail-row">
                  <span class="detail-label">Reservation ID:</span>
                  <span class="detail-value">#${reservation.id.substring(0, 8).toUpperCase()}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Restaurant Branch:</span>
                  <span class="detail-value">${branch.name}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Date & Time:</span>
                  <span class="detail-value">${new Date(reservation.reservationDate).toLocaleDateString()} at ${new Date(reservation.reservationDate).toLocaleTimeString()}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Party Size:</span>
                  <span class="detail-value">${reservation.guestCount} ${reservation.guestCount === 1 ? "Guest" : "Guests"}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Seating Preference:</span>
                  <span class="detail-value" style="text-transform: capitalize;">${reservation.seatingPreference}</span>
                </div>
                ${
                  reservation.specialOccasion
                    ? `
                  <div class="detail-row">
                    <span class="detail-label">Special Occasion:</span>
                    <span class="detail-value">${reservation.specialOccasion}</span>
                  </div>
                `
                    : ""
                }
              </div>

              <div class="section">
                <h2>📍 Location & Contact</h2>
                <div class="detail-row">
                  <span class="detail-label">Address:</span>
                  <span class="detail-value">${branch.address}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Phone:</span>
                  <span class="detail-value"><a href="tel:${branch.phone}" style="color: #E8703A; text-decoration: none;">${branch.phone}</a></span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Hours:</span>
                  <span class="detail-value">${branch.openTime} - ${branch.closeTime}</span>
                </div>
              </div>

              <div class="highlight">
                <strong>✓ What's Next?</strong><br>
                ${
                  isAutoConfirmed
                    ? "Your reservation is confirmed! Please arrive 10 minutes early. Have a wonderful meal!"
                    : "We'll review your reservation and confirm within 1 hour via phone or email."
                }
              </div>
            `
                : `
              <div class="section">
                <h2>📬 New Reservation Request</h2>
                <div class="detail-row">
                  <span class="detail-label">Customer Name:</span>
                  <span class="detail-value">${reservation.customerName}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Email:</span>
                  <span class="detail-value"><a href="mailto:${reservation.customerEmail}" style="color: #E8703A;">${reservation.customerEmail}</a></span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Phone:</span>
                  <span class="detail-value"><a href="tel:${reservation.customerPhone}" style="color: #E8703A;">${reservation.customerPhone}</a></span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Date & Time:</span>
                  <span class="detail-value">${new Date(reservation.reservationDate).toLocaleDateString()} at ${new Date(reservation.reservationDate).toLocaleTimeString()}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Party Size:</span>
                  <span class="detail-value">${reservation.guestCount} guests</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Seating:</span>
                  <span class="detail-value" style="text-transform: capitalize;">${reservation.seatingPreference}</span>
                </div>
                ${reservation.specialOccasion ? `<div class="detail-row"><span class="detail-label">Occasion:</span><span class="detail-value">${reservation.specialOccasion}</span></div>` : ""}
                <div class="detail-row">
                  <span class="detail-label">Status:</span>
                  <span class="detail-value" style="color: ${isAutoConfirmed ? "#10b981" : "#f59e0b"}; font-weight: 700;">${isAutoConfirmed ? "AUTO-CONFIRMED (≤12 guests)" : "PENDING MANUAL CONFIRMATION (>12 guests)"}</span>
                </div>
              </div>
            `
            }

            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #666; font-size: 14px;">Thank you for choosing Delimwitu Cafe!</p>
            </div>
          </div>

          <div class="footer">
            <p>&copy; 2026 Delimwitu Cafe. All rights reserved.</p>
            <p>This is an automated email. Please do not reply.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function createReservation(data: {
  branchId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  guestCount: number;
  reservationDate: string;
  seatingPreference: string;
  specialOccasion?: string;
}) {
  try {
    // Determine status based on guest count
    const status = data.guestCount <= 12 ? "auto_confirmed" : "pending_manual";

    // Create reservation
    const reservation = await prisma.reservation.create({
      data: {
        ...data,
        reservationDate: new Date(data.reservationDate),
        status,
      },
    });

    // Get branch details
    const branch = await prisma.branch.findUnique({
      where: { id: data.branchId },
    });

    if (!branch) {
      throw new Error("Branch not found");
    }

    // Send email to customer
    const customerEmail = generateReservationEmailHTML(
      reservation,
      branch,
      "customer"
    );
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.customerEmail,
      subject: `Reservation Confirmation - Delimwitu Cafe ${data.guestCount <= 12 ? "✓ Confirmed" : "⏳ Pending"}`,  
      html: customerEmail,
    });

    // Send email to restaurant
    const restaurantEmail = generateReservationEmailHTML(
      reservation,
      branch,
      "restaurant"
    );
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: branch.email,
      subject: `New Reservation - ${reservation.customerName} (${data.guestCount} guests)`,
      html: restaurantEmail,
    });

    return {
      success: true,
      message: status === "auto_confirmed" ? "Reservation confirmed!" : "Reservation submitted! We'll confirm soon.",
      reservation,
      status,
    };
  } catch (error) {
    console.error("Reservation error:", error);
    return {
      success: false,
      message: "Failed to create reservation. Please try again.",
      error: String(error),
    };
  }
}

export async function getBranches() {
  try {
    const branches = await prisma.branch.findMany({
      orderBy: { name: "asc" },
    });
    return branches;
  } catch (error) {
    console.error("Error fetching branches:", error);
    return [];
  }
}

export async function seedBranches() {
  try {
    const existingBranches = await prisma.branch.count();
    if (existingBranches > 0) {
      return { message: "Branches already seeded" };
    }

    const branches = [
      {
        name: "Delimwitu Cafe Mombasa",
        address: "Old Town, Mombasa Road, Near Fort Jesus",
        phone: "+254 701 234 567",
        email: "mombasa@wfood.com",
        openTime: "7:00 AM",
        closeTime: "11:00 PM",
        capacity: 120,
      },
      {
        name: "Delimwitu Cafe Nyali",
        address: "Nyali Centre, Nyali Road, Mombasa",
        phone: "+254 702 345 678",
        email: "nyali@wfood.com",
        openTime: "7:00 AM",
        closeTime: "11:00 PM",
        capacity: 100,
      },
      {
        name: "Delimwitu Cafe Nairobi CBD",
        address: "CBD Centre, Kikuyu Street, Nairobi",
        phone: "+254 703 456 789",
        email: "nairobi-cbd@wfood.com",
        openTime: "7:00 AM",
        closeTime: "11:00 PM",
        capacity: 150,
      },
      {
        name: "Delimwitu Cafe Westlands",
        address: "Westlands Plaza, Mpesi Lane, Nairobi",
        phone: "+254 704 567 890",
        email: "westlands@wfood.com",
        openTime: "7:00 AM",
        closeTime: "11:00 PM",
        capacity: 130,
      },
      {
        name: "Delimwitu Cafe Kilimani",
        address: "Kilimani Centre, Bogani Road, Nairobi",
        phone: "+254 705 678 901",
        email: "kilimani@wfood.com",
        openTime: "7:00 AM",
        closeTime: "11:00 PM",
        capacity: 90,
      },
      {
        name: "Delimwitu Cafe Karen",
        address: "Karen Shopping Centre, Karen Road, Nairobi",
        phone: "+254 706 789 012",
        email: "karen@wfood.com",
        openTime: "7:00 AM",
        closeTime: "11:00 PM",
        capacity: 110,
      },
      {
        name: "Delimwitu Cafe Kisumu",
        address: "Kisumu Town Centre, Kenya Street, Kisumu",
        phone: "+254 707 890 123",
        email: "kisumu@wfood.com",
        openTime: "7:00 AM",
        closeTime: "11:00 PM",
        capacity: 80,
      },
    ];

    await prisma.branch.createMany({
      data: branches,
    });

    return { message: "Branches seeded successfully", count: branches.length };
  } catch (error) {
    console.error("Error seeding branches:", error);
    return { message: "Error seeding branches" };
  }
}
