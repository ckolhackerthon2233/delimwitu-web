"use server";

import nodemailer from "nodemailer";

interface OrderEmailData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  itemName: string;
  itemPrice: string;
  quantity: number;
  specialRequests?: string;
}

// Create a transporter (configure with your email service)
const transporter = nodemailer.createTransport({
  service: "gmail", // or your email provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendOrderEmail(data: OrderEmailData) {
  try {
    const totalPrice = parseFloat(data.itemPrice.replace(/[^0-9.]/g, "")) * data.quantity;
    const orderId = Math.random().toString(36).substring(2, 10).toUpperCase();

    // Generate vibrant customer email template
    const customerEmailContent = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%); padding: 0; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(255, 107, 53, 0.2);">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #FF6B35 0%, #D94B1F 100%); padding: 40px 20px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 32px; font-weight: 800; letter-spacing: -0.5px;">🍽️ DELIMWITU</h1>
          <p style="margin: 8px 0 0 0; font-size: 14px; opacity: 0.9; letter-spacing: 2px;">ORDER CONFIRMATION</p>
        </div>

        <!-- Main Content -->
        <div style="background: white; padding: 40px 30px;">
          <!-- Status Badge -->
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="display: inline-block; background: linear-gradient(135deg, #10B981 0%, #059669 100%); color: white; padding: 12px 24px; border-radius: 50px; font-weight: 700; font-size: 14px; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);">
              ✓ ORDER RECEIVED
            </div>
          </div>

          <p style="color: #333; font-size: 16px; margin: 0 0 30px 0; text-align: center;">
            <strong>Hi ${data.customerName},</strong><br>
            <span style="color: #666; font-size: 14px;">Thank you for your order! We're preparing it now.</span>
          </p>

          <!-- Order Details -->
          <div style="background: linear-gradient(135deg, #FFF5EE 0%, #FFE8DC 100%); border-left: 4px solid #FF6B35; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
            <h2 style="color: #D94B1F; font-size: 16px; margin: 0 0 15px 0; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">📦 Order Details</h2>
            
            <div style="margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid rgba(217, 75, 31, 0.2);">
              <p style="color: #666; margin: 0 0 5px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Order ID</p>
              <p style="color: #FF6B35; margin: 0; font-size: 18px; font-weight: 700;">#${orderId}</p>
            </div>

            <div style="margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid rgba(217, 75, 31, 0.2);">
              <p style="color: #666; margin: 0 0 5px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Item</p>
              <p style="color: #333; margin: 0; font-size: 16px; font-weight: 700;">${data.itemName}</p>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
              <div style="border-right: 1px solid rgba(217, 75, 31, 0.2); padding-right: 15px;">
                <p style="color: #666; margin: 0 0 5px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Quantity</p>
                <p style="color: #FF6B35; margin: 0; font-size: 18px; font-weight: 700;">${data.quantity}</p>
              </div>
              
              <div>
                <p style="color: #666; margin: 0 0 5px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Unit Price</p>
                <p style="color: #FF6B35; margin: 0; font-size: 18px; font-weight: 700;">${data.itemPrice}</p>
              </div>
            </div>

            <div style="margin-top: 15px; padding-top: 15px; border-top: 2px solid rgba(217, 75, 31, 0.3); text-align: right;">
              <p style="color: #666; margin: 0 0 5px 0; font-size: 12px; font-weight: 600;">TOTAL AMOUNT</p>
              <p style="color: #FF6B35; margin: 0; font-size: 24px; font-weight: 800;">KSh ${totalPrice.toFixed(2)}</p>
            </div>
          </div>

          ${data.specialRequests ? `
            <div style="background: #F0F9FF; border-left: 4px solid #2196F3; padding: 15px; border-radius: 8px; margin-bottom: 30px;">
              <p style="color: #1565C0; margin: 0 0 5px 0; font-size: 12px; font-weight: 600; text-transform: uppercase;">📝 Special Requests</p>
              <p style="color: #333; margin: 0; font-size: 14px;">${data.specialRequests}</p>
            </div>
          ` : ''}

          <!-- What to Expect -->
          <div style="background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%); border-left: 4px solid #10B981; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
            <h3 style="color: #059669; margin: 0 0 12px 0; font-weight: 700;">⏱️ What's Next</h3>
            <ul style="margin: 0; padding-left: 20px; color: #333; font-size: 14px; line-height: 1.8;">
              <li>We're preparing your order now</li>
              <li>You'll receive an update when it's ready</li>
              <li>We'll contact you at ${data.customerPhone}</li>
              <li>Thank you for choosing Delimwitu!</li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div style="background: #F9F9F9; padding: 20px; border-radius: 8px; text-align: center;">
            <p style="color: #666; margin: 0 0 10px 0; font-size: 13px;">Questions? Reach out to us:</p>
            <p style="margin: 0;">
              <a href="tel:+254-phone" style="color: #FF6B35; text-decoration: none; font-weight: 700; font-size: 16px;">📞 +254 XXX XXX XXX</a>
            </p>
          </div>

          <p style="color: #999; font-size: 12px; text-align: center; margin: 30px 0 0 0; line-height: 1.6;">
            Thank you for choosing <strong style="color: #333;">Delimwitu Restaurant</strong>. Enjoy your meal!
          </p>
        </div>

        <!-- Footer -->
        <div style="background: #F5F5F5; padding: 20px; text-align: center; border-top: 1px solid #EEE;">
          <p style="margin: 0; color: #999; font-size: 12px;">
            © 2026 Delimwitu Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    `;

    // Generate vibrant restaurant email template
    const orgEmailContent = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%); padding: 0; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(255, 107, 53, 0.2);">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #FF6B35 0%, #D94B1F 100%); padding: 40px 20px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 32px; font-weight: 800; letter-spacing: -0.5px;">🍽️ DELIMWITU</h1>
          <p style="margin: 8px 0 0 0; font-size: 14px; opacity: 0.9; letter-spacing: 2px;">NEW ORDER ALERT</p>
        </div>

        <!-- Main Content -->
        <div style="background: white; padding: 40px 30px;">
          <!-- Alert Badge -->
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="display: inline-block; background: linear-gradient(135deg, #FF6B35 0%, #D94B1F 100%); color: white; padding: 12px 24px; border-radius: 50px; font-weight: 700; font-size: 14px; box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);">
              🔔 NEW ORDER
            </div>
          </div>

          <!-- Customer Details -->
          <div style="background: linear-gradient(135deg, #FFF5EE 0%, #FFE8DC 100%); border-left: 4px solid #FF6B35; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
            <h2 style="color: #D94B1F; font-size: 16px; margin: 0 0 15px 0; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">👤 Customer Details</h2>
            
            <div style="margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid rgba(217, 75, 31, 0.2);">
              <p style="color: #666; margin: 0 0 5px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Name</p>
              <p style="color: #333; margin: 0; font-size: 16px; font-weight: 700;">${data.customerName}</p>
            </div>

            <div style="margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid rgba(217, 75, 31, 0.2);">
              <p style="color: #666; margin: 0 0 5px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
              <p style="color: #FF6B35; margin: 0; font-size: 14px; font-weight: 600;">
                <a href="mailto:${data.customerEmail}" style="color: #FF6B35; text-decoration: none;">${data.customerEmail}</a>
              </p>
            </div>

            <div>
              <p style="color: #666; margin: 0 0 5px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone</p>
              <p style="color: #333; margin: 0; font-size: 14px; font-weight: 600;">
                <a href="tel:${data.customerPhone}" style="color: #FF6B35; text-decoration: none;">${data.customerPhone}</a>
              </p>
            </div>
          </div>

          <!-- Order Details -->
          <div style="background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%); border-left: 4px solid #2196F3; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
            <h2 style="color: #1565C0; font-size: 16px; margin: 0 0 15px 0; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">📦 Order Details</h2>
            
            <div style="margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid rgba(21, 101, 192, 0.2);">
              <p style="color: #666; margin: 0 0 5px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Order ID</p>
              <p style="color: #1565C0; margin: 0; font-size: 18px; font-weight: 700;">#${orderId}</p>
            </div>

            <div style="margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid rgba(21, 101, 192, 0.2);">
              <p style="color: #666; margin: 0 0 5px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Item</p>
              <p style="color: #333; margin: 0; font-size: 16px; font-weight: 700;">${data.itemName}</p>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid rgba(21, 101, 192, 0.2);">
              <div style="border-right: 1px solid rgba(21, 101, 192, 0.2); padding-right: 15px;">
                <p style="color: #666; margin: 0 0 5px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Quantity</p>
                <p style="color: #1565C0; margin: 0; font-size: 16px; font-weight: 700;">${data.quantity}</p>
              </div>
              
              <div>
                <p style="color: #666; margin: 0 0 5px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Unit Price</p>
                <p style="color: #1565C0; margin: 0; font-size: 16px; font-weight: 700;">${data.itemPrice}</p>
              </div>
            </div>

            <div style="text-align: right; padding-top: 12px; border-top: 2px solid rgba(21, 101, 192, 0.2);">
              <p style="color: #666; margin: 0 0 5px 0; font-size: 12px; font-weight: 600;">TOTAL AMOUNT</p>
              <p style="color: #1565C0; margin: 0; font-size: 22px; font-weight: 800;">KSh ${totalPrice.toFixed(2)}</p>
            </div>
          </div>

          ${data.specialRequests ? `
            <div style="background: linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%); border-left: 4px solid #7B1FA2; padding: 15px; border-radius: 8px; margin-bottom: 30px;">
              <p style="color: #6A1B9A; margin: 0 0 5px 0; font-size: 12px; font-weight: 600; text-transform: uppercase;">📝 Special Requests</p>
              <p style="color: #333; margin: 0; font-size: 14px;">${data.specialRequests}</p>
            </div>
          ` : ''}

          <!-- Action Required -->
          <div style="background: linear-gradient(135deg, #FFF9C4 0%, #FFEB3B 100%); border-left: 4px solid #FBC02D; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="color: #F57C00; margin: 0; font-weight: 700; font-size: 14px;">
              ⚡ Please prepare this order and contact the customer to confirm delivery/pickup.
            </p>
          </div>

          <p style="color: #999; font-size: 12px; text-align: center; margin: 0;">
            This is an automated notification. Please do not reply to this email.
          </p>
        </div>

        <!-- Footer -->
        <div style="background: #F5F5F5; padding: 20px; text-align: center; border-top: 1px solid #EEE;">
          <p style="margin: 0; color: #999; font-size: 12px;">
            © 2026 Delimwitu Restaurant Management System
          </p>
        </div>
      </div>
    `;

    // Send email to customer
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.customerEmail,
      subject: `🍽️ Order Confirmation - ${data.itemName}`,
      html: customerEmailContent,
    });

    // Send email to organization
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RESTAURANT_EMAIL,
      subject: `🔔 New Order from ${data.customerName} - ${data.itemName}`,
      html: orgEmailContent,
    });

    return { success: true, message: "Order email sent successfully!" };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, message: "Failed to send order email. Please try again." };
  }
}
