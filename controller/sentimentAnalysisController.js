import { redisClient, deepAi } from "../index.js";

export async function getSentimentAnalysis(req, res) {
  if (req.news.length === 0) {
    return res.status(200).json({ status: false, message: "try again" });
  }
  const allReq = req.news.map((title) => {
    return deepAi.callStandardApi("sentiment-analysis", {
      text: title,
    });
  });
  Promise.all(allReq)
    .then((values) => {
      const sa = values.map((result) => result.output[0]);
      redisClient.set("sa", JSON.stringify(sa));
      redisClient.expire("sa", 600); // expires every 10 mins
      return res.json({
        status: true,
        sa,
      });
    })
    .catch((err) => {
      console.log(err);
      throw BaseError(200, "try again");
    });
}
