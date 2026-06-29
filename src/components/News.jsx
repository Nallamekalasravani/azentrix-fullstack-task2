import { useEffect, useState } from "react";

function News() {
  const [news, setNews] = useState([]);

  const apiKey = import.meta.env.VITE_GNEWS_API_KEY;

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      const res = await fetch(
        `https://gnews.io/api/v4/top-headlines?country=in&lang=en&max=6&apikey=${apiKey}`
      );

      const data = await res.json();

      if (data.articles) {
        setNews(data.articles);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="news">
      <h2>📰 Top News</h2>

      <div className="news-grid">
        {news.map((item, index) => (
          <div className="news-card" key={index}>
            <img src={item.image} alt="" />

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <a href={item.url} target="_blank" rel="noreferrer">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;