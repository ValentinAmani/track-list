import http from "http";
import app from "./app";
import { MONGODB_URI, PORT } from "./config";
import mongoose from "./services/mongoose";

const server = http.createServer(app);

mongoose.connect(MONGODB_URI);
mongoose.Promise = Promise;

setImmediate(() => {
  server.listen(PORT, () => console.log(`Listening on ${PORT}`));
});
