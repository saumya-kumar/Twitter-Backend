import express from 'express';
import { login, signup } from '../../controllers.js/auth-controller.js';
import { createComment } from '../../controllers.js/comment-controller.js';
import { toggleLike } from '../../controllers.js/like-controller.js';
import { createTweet, getTweet } from '../../controllers.js/tweet-controllers.js';

import { authenticate } from '../../middlewares/authenticate.js';

const router = express.Router()

router.post('/tweets',authenticate ,createTweet);
router.get('/tweets/:id',getTweet);

router.post('/likes/toggle',toggleLike);
router.post('/comments', authenticate ,createComment);

router.post('/signup',signup);
router.post('/login',login);

export default router;

















