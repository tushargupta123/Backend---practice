import express from "express";
import { addPosts, deletePost, getPosts } from "../controllers/post.js";

const router = express.Router();

router.get('/',getPosts)
router.post('/',addPosts)
router.post('/:id',deletePost)

export default router;