"use server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  "use server";
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const html = await render(<EmailTemplate name={name} email={email} message={message} />);
  const { data, error } = await resend.emails.send({
    from: "dev@mavela.co.za",
    to: ["reservations@mavela.co.za", "iandavidstevens06@gmail.com"],
    subject: "Enquirey from Mavela Game Lodge Website",
    html,
  });

  if (error) {
    console.error("Error sending email:", error);
  }
  if (data) {
    console.log("Email sent successfully:", data);
  }

  // Here you would typically send the email using an email service
  console.log("Sending email:", { name, email, message });
};

export const sendTokenToBackend = async (token: string) => {
  "use server";
  // Verify the token with Google reCAPTCHA server-side API
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${secretKey}&response=${token}`,
  });
  const data = await response.json();

  if (data.success && data.score >= 0.5) {
    console.log("reCAPTCHA verification successful:", data);
    // Proceed with form submission logic, e.g., send email
    return true;
  } else {
    console.error("reCAPTCHA verification failed:", data);
    // Handle the failure case, e.g., reject the form submission
    return false;
  }
};
