import express from "express";
import { middleware as body } from "bodymen";
import { getParticipant, addParticipant } from "./controllers";

const router = express.Router();

router.get("/", getParticipant);

router.post(
  "/",
  body({
    firstName: {
      type: String,
      match: /^[a-zA-Z-]{2,}$/,
      required: true,
    },
    name: {
      type: String,
      match: /^[a-zA-Z-]{2,}$/,
      required: true,
    },
    email: {
      type: String,
      match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      required: true,
    },
    phone: {
      type: String,
      match: /^.{10,}$/,
      required: true,
    },
  }),
  addParticipant
);

export default router;
