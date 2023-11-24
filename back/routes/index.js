import express from "express";
import participant from "./participant";

const router = express.Router();

router.use("/participants", participant);

export default router;
