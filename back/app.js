import { API_ROOT } from "./config";
import express from "./services/express";
import routes from "./routes";

const app = express(API_ROOT, routes);

export default app;
