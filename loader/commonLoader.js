import express from "express";
import "express-async-errors";
import cors from "cors";
import FileUpload from "express-fileupload";
import compression from "compression";

const CommonLoader = async ({ app }) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(FileUpload());
  app.use(compression());
  return app;
};

export default CommonLoader;
