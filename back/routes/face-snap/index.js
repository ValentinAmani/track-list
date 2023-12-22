import { Router } from "express";
import { middleware as body } from "bodymen";
import { authenticateToken } from "../../services/authentication";
import {
  getAllFaceSnaps,
  getUserFaceSnaps,
  getFaceSnapById,
  snapFaceSnap,
  addFaceSnap,
  removeFaceSnap,
} from "./controllers";

const router = Router();

router.get("/", authenticateToken, getAllFaceSnaps);

router.get("/users", authenticateToken, getUserFaceSnaps);

router.get("/:id", authenticateToken, getFaceSnapById);

router.post(
  "/",
  authenticateToken,
  body({
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
    location: {
      type: String,
      required: false,
    },
  }),
  addFaceSnap
);

router.put(
  "/:id",
  authenticateToken,
  body({
    snapType: {
      type: String,
      enum: ["snap", "unsnap"],
      required: true,
    },
  }),
  snapFaceSnap
);

router.delete("/:id", authenticateToken, removeFaceSnap);

export default router;
