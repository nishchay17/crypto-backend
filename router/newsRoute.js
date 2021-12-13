import { Router } from "express";
import { topNews } from "../controller/newsController.js";
import { newsCache } from "../middleware/newsCache.js";

const newsRouter = Router();

newsRouter.get("/", newsCache, topNews);

export default newsRouter;
