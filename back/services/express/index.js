import express from "express";
import cors from "cors";
// import { errorHandler as bodyErrorHandler } from "bodymen";
// import bodyParser from "body-parser";

export default (apiRoot, routes) => {
  const app = express();

  app.use(cors());
  // app.use(bodyParser.json());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  app.use(apiRoot, routes);

  return app;
};
