import BaseError from "../error/BaseError.js";
import { redisClient } from "../index.js";

const getNewTitle = (req, res, next) => {
  redisClient.get(`news-1`, (err, data) => {
    if (err) {
      throw new BaseError(500, "Error with Cache");
    }
    data = JSON.parse(data);
    if (data === null) {
      data = [];
    }
    data = data.map((news) => news.title);
    req.news = data;
    next();
  });
};

export default getNewTitle;
