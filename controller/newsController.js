import { newsapi } from "../index.js";

export async function topNews(req, res) {
  const page = req.query.page || 1;
  const news = await newsapi.v2.topHeadlines({
    q: "cryptocurrency",
    category: "business",
    language: "en",
  });
  //redisClient.set(`allcrypto-${page}`, JSON.stringify(cleanCrypto));
  return res.json({ status: true, news: news.articles });
}
