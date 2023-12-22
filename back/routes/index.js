import { Router } from "express";
import participant from "./participant";
import auth from "./auth";
import faceSnap from "./face-snap";

const router = Router();

router.use("/participants", participant);
router.use("/auth", auth);
router.use("/facesnaps", faceSnap);

export default router;
