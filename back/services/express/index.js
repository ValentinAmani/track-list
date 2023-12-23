import express from "express";
import morgan from "morgan";
import cors from "cors";
import { errorHandler as queryErrorHandler } from "querymen";
import { errorHandler as bodyErrorHandler } from "bodymen";

export default (apiRoot, routes) => {
  const app = express();

  app.use(morgan("dev"));
  app.set("view engine", "ejs");
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json({ strict: true }));
  app.use(apiRoot, routes);
  app.use(queryErrorHandler());
  app.use(bodyErrorHandler());

  return app;
};
