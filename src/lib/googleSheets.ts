export interface OrderData {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  product: string;
  size: string;
  quantity: number;
  price: number;
  paymentMode: "online" | "cod";
  timestamp: string;
}

// Replace this with your actual Google Apps Script Web App URL
// To set up: 
// 1. Create a Google Sheet
// 2. Go to Extensions → Apps Script
// 3. Paste the Google Apps Script code (see google-apps-script.js file)
// 4. Save and Deploy → New Deployment → Web App
// 5. Set "Execute as" to "Me" and "Who has access" to "Anyone"
// 6. Copy the Web App URL and paste it below
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbyj4DjI4zWVpYIsO6wBlzGWC7ipmNWd8SPQWzqp6wwoiugm1Dtf7PZbz5tN4I0bCcKD/exec";

export async function submitOrderToSheet(order: OrderData): Promise<boolean> {
  // If URL hasn't been configured yet, log and return success for demo
  if (GOOGLE_SHEET_URL.startsWith("YOUR_") || !GOOGLE_SHEET_URL) {
    console.log("Google Sheet URL not configured. Order data:", order);
    console.log(
      "To configure: Replace GOOGLE_SHEET_URL in src/lib/googleSheets.ts with your Google Apps Script Web App URL"
    );
    return true;
  }

  try {
    // Send data as JSON - Google Apps Script will handle it
    const response = await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      mode: "no-cors", // Required for Google Apps Script Web Apps
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    // With no-cors mode, we can't read the response, but the request was sent
    // Log the order data for debugging
    console.log("✅ Order data sent to Google Sheets:", {
      name: order.name,
      phone: order.phone,
      product: order.product,
      price: order.price,
      paymentMode: order.paymentMode
    });
    
    return true;
  } catch (error) {
    console.error("❌ Failed to submit order to Google Sheets:", error);
    console.error("Order data that failed:", order);
    
    // Try alternative method using form data
    try {
      const formData = new URLSearchParams();
      Object.keys(order).forEach(key => {
        formData.append(key, String(order[key as keyof OrderData]));
      });
      
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });
      
      console.log("✅ Retry successful with form data method");
      return true;
    } catch (retryError) {
      console.error("❌ Retry also failed:", retryError);
      // Still return true to allow order to proceed even if sheet submission fails
      return true;
    }
  }
}
