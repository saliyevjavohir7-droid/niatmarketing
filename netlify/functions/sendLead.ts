import type { Handler } from "@netlify/functions";

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const data = JSON.parse(event.body || "{}");

    const message = `
📩 YANGI ARIZA — NIAT MARKETING

👤 Ism: ${data.full_name}
📞 Telefon: ${data.phone}

🏢 Biznes: ${data.business_name}
📊 Turi: ${data.business_type}
👥 Xodimlar: ${data.employees}
📍 Manzil: ${data.location}

⚠️ Muammolar:
${data.problems}

💰 Byudjet: ${data.budget}
🎯 Kutilgan natija:
${data.expected_result}

⏰ Qulay vaqt: ${data.contact_time}
`;

    await fetch(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.CHAT_ID,
          text: message
        })
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error" })
    };
  }
};
