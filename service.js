import express from "express";

import Loader from "./loader/index.js";
import BaseError from "./error/BaseError.js";

const Server = async () => {
  const app = express();
  await Loader({ app });
  app.all("*", (req, res) => {
    throw new BaseError(404, "Not found");
  });

  app.use((error, req, res, next) => {
    if (error instanceof BaseError) {
      return res
        .status(error.statusCode)
        .json({ status: false, message: error.message });
    }
    return res.json({ status: false, message: error.message });
  });

  return app;
};

export default Server;
