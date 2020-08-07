import express from "express";

import { createPost, getAllPost, getPostByMe } from "../controller/post";
// import verifyToken from "../middleware/verify";

const router = express.Router();

router.post("/create-post", createPost);
router.get("/", getAllPost);
router.get("/mypost", getPostByMe);

export default router;
