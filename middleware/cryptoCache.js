import BaseError from "../error/BaseError.js";
import { redisClient } from "../index.js";

export async function allCryptoCache(req, res, next) {
  const page = req.query.page || 1;

  redisClient.get(`allcrypto-${page}`, (err, data) => {
    if (err) {
      throw new BaseError(500, "Error with Cache");
    }
    data = JSON.parse(data);
    if (data !== null) {
      res.json({ message: true, crypto: data });
    } else {
      next();
    }
  });
}
