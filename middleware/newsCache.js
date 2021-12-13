import BaseError from "../error/BaseError.js";
import { redisClient } from "../index.js";

export async function newsCache(req, res, next) {
  const page = req.query.page || 1;

  redisClient.get(`news-${page}`, (err, data) => {
    if (err) {
      throw new BaseError(500, "Error with Cache");
    }
    data = JSON.parse(data);
    if (data !== null) {
      res.json({ status: true, news: data });
    } else {
      next();
    }
  });
}
