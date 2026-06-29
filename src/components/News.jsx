import { useEffect, useState } from "react";

function News() {
  const [news, setNews] = useState([]);

  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=6&apiKey=${apiKey}`
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
            <img
              src={item.urlToImage || "https://via.placeholder.com/300x200"}
              alt={item.title}
            />

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