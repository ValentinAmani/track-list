import mongoose, { Schema } from "mongoose";

const faceSnapSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    snaps: {
      type: Number,
      default: 0,
    },
    location: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const model = mongoose.model("FaceSnap", faceSnapSchema);
export default model;
