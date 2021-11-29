import dotenv from "dotenv";
import NewsAPI from "newsapi";

import CacheLoader from "./loader/CacheLoader.js";
import Server from "./service.js";
import DbLoader from "./loader/DbLoader.js";

dotenv.config();

DbLoader();
export const redisClient = await CacheLoader();
export const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

const app = await Server();

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
