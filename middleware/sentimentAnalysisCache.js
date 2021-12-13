import BaseError from "../error/BaseError.js";
import { redisClient } from "../index.js";

export async function sentimentAnalysisCache(req, res, next) {
  redisClient.get(`sa`, (err, data) => {
    if (err) {
      throw new BaseError(500, "Error with Cache");
    }
    if (data !== null) {
      res.json({ status: true, sa: data });
    } else {
      next();
    }
  });
}
