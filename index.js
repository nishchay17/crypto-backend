import dotenv from "dotenv";
import NewsAPI from "newsapi";
import Deepai from "deepai";

import CacheLoader from "./loader/CacheLoader.js";
import Server from "./server.js";
import DbLoader from "./loader/DbLoader.js";

dotenv.config();
Deepai.setApiKey(process.env.DEEP_AI_KEY);

DbLoader();
export const redisClient = await CacheLoader();
export const newsapi = new NewsAPI(process.env.NEWS_API_KEY);
export const deepAi = Deepai;

const app = await Server();

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
