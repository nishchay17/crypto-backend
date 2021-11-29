import BaseError from "../error/BaseError.js";

import cryptoRouter from "../router/cryptoRoute.js";
import newsRouter from "../router/newsRoute.js";
import userRouter from "../router/userRouter.js";

const RoutesLoader = async ({ app }) => {
  app.get("/", (req, res) => {
    return res.json("done");
  });
  app.get("/error", (req, res) => {
    throw new BaseError(400, "It's Error");
  });
  app.use("/user", userRouter);
  app.use("/crypto", cryptoRouter);
  app.use("/news", newsRouter);
  return app;
};

export default RoutesLoader;
