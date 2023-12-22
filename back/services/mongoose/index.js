import mongoose from "mongoose";
import Promise from "bluebird";

mongoose.Promise = Promise;
mongoose.Types.ObjectId.prototype.view = function () {
  return { id: this.toString() };
};

mongoose.connection.once("open", (_) => {
  console.log("Database connected");
});

mongoose.connection.on("error", (error) => {
  console.error(`Database connection error: ${error}`);
  process.exit(-1);
});

export default mongoose;
