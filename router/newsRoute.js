import { Router } from "express";
import { topNews } from "../controller/newsController.js";

const newsRouter = Router();

newsRouter.get("/", topNews);

export default newsRouter;
