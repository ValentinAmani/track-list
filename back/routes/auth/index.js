import { Router } from "express";
import { middleware as body } from "bodymen";
import { signup, login } from "./controllers";

const router = Router();

router.post(
  "/signup",
  body({
    userName: {
      type: String,
      match: /^[a-zA-Z][a-zA-Z0-9_ -]{1,}$/,
      required: true,
    },
    email: {
      type: String,
      match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      required: true,
    },
    password: {
      type: String,
      match: /.{4,}/,
      required: true,
    },
  }),
  signup
);

router.post(
  "/login",
  body({
    email: {
      type: String,
      match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      required: true,
    },
    password: {
      type: String,
      match: /.{4,}/,
      required: true,
    },
  }),
  login
);

export default router;
