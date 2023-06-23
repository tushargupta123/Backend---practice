import express from 'express';
import {createTweet, getTweet} from '../../controllers/tweet-controller.js'
import { toggleLike } from '../../controllers/like-controller.js';
import { createComment } from '../../controllers/comment-controller.js';
import { login, signup } from '../../controllers/auth-controller.js';
import { authenticate } from '../../middlewares/authenticate.js';
import upload from "../../config/file-upload-s3-config.js";

const singleUploader = upload.single('image');
const router = express.Router();

router.post('/tweets',authenticate,singleUploader,createTweet);
router.get('/tweets',authenticate,getTweet);
router.post('/likes/toggle',authenticate,toggleLike);
router.post('/comments',authenticate,createComment);
router.post('/signup',signup);
router.post('/login',login);

export default router;