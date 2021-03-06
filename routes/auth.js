import express from "express";

import { signUp, signIn } from "../controller/auth";

const router = express.Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);

export default router;
