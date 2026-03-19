export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { city, weather, temp } = req.body;

  const GROQ_KEY = process.env.GROQ_KEY;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GROQ_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        max_tokens: 1024,
        messages: [
          {
            role: "user",
            content: `Weather in ${city} currently: ${weather}, temperature ${temp}°C. Provide 3 travel recommendations for places to visit in this city that match the current weather conditions. Format: place name, brief reason why it's suitable for the current weather. Answer in English, concise and to the point.`
          }
        ]
      })
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to get recommendation" });
  }
}