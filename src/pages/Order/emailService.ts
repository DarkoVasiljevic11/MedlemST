import emailjs from "@emailjs/browser";

interface OrderEmailParams extends Record<string, unknown> {
  customer_name: string;
  customer_address: string;
  customer_phone: string;
  customer_email: string;
  customer_napom: string;
  message: string;
}

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export const sendOrderEmail = async (
  templateParams: OrderEmailParams
) => {
  try {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      throw new Error("Missing EmailJS environment variables");
    }

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    console.log("Email sent:", response.status);
    return response;
  } catch (error) {
    console.error("EmailJS error:", error);
    throw error;
  }
};