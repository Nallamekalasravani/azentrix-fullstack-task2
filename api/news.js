export default async function handler(req, res) {
  try {
   const apiKey = process.env.GNEWS_API_KEY;

    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?country=in&lang=en&max=6&apikey=${apiKey}`
    );

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}