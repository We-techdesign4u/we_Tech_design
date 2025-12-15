"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(prevState, formData) {
  const firstName = formData.get("firstName")?.trim();
  const lastName = formData.get("lastName")?.trim();
  const company = formData.get("company")?.trim();
  const email = formData.get("email")?.trim();
  const message = formData.get("message")?.trim();

  if (!firstName || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["wedesign4u11@gmail.com"],
      replyTo: email,
      subject: `New message from ${firstName} ${lastName || ""}`,
      text: `
Name: ${firstName} ${lastName || ""}
Company: ${company || "Not provided"}
Email: ${email}

Message:
${message}
      `.trim(),
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "Failed to send message. Try again later.",
    };
  }
}
