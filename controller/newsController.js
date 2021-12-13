import { redisClient } from "../index.js";
import { newsapi } from "../index.js";

export async function topNews(req, res) {
  const page = req.query.page || 1;
  const news = await newsapi.v2.topHeadlines({
    q: "cryptocurrency",
    category: "business",
    language: "en",
  });
  redisClient.set(`news-${page}`, JSON.stringify(news.articles));
  redisClient.expire(`news-${page}`, 3600); // expires every 1 hour
  return res.json({ status: true, news: news.articles });
}
