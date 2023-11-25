import express from "express";
import cors from "cors";
// import { errorHandler as bodyErrorHandler } from "bodymen";
// import bodyParser from "body-parser";

export default (apiRoot, routes) => {
  const app = express();

  let corsOptions = {
    origin: 'https://track-list-front.vercel.app',
    optionsSuccessStatus: 200
  }

  app.use(cors(corsOptions));
  // app.use(bodyParser.json());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  app.use(apiRoot, routes);

  return app;
};
