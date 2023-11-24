import express from "express";
// import cors from "cors";
import { errorHandler as bodyErrorHandler } from "bodymen";
import bodyParser from "body-parser";

export default (apiRoot, routes) => {
  const app = express();

  // app.use(cors());
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });
  app.use(bodyParser.json());
  // app.use(express.urlencoded({ extended: true }));
  // app.use(express.json({ strict: true }));
  app.use(apiRoot, routes);
  app.use(bodyErrorHandler());

  return app;
};
