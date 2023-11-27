import express from "express";
import cors from "cors";

export default (apiRoot, routes) => {
  const app = express();

  app.use(cors());
  app.use(
    cors({
      origin: "https://track-list-front.vercel.app",
    })
  );

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(apiRoot, routes);

  return app;
};
