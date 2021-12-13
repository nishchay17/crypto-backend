import { Router } from "express";
import { getSentimentAnalysis } from "../controller/sentimentAnalysisController.js";
import getNewTitle from "../middleware/getNewTitle.js";
import { sentimentAnalysisCache } from "../middleware/sentimentAnalysisCache.js";

const sentimentAnalysisRouter = Router();

sentimentAnalysisRouter.get(
  "/",
  sentimentAnalysisCache,
  getNewTitle,
  getSentimentAnalysis
);

export default sentimentAnalysisRouter;
