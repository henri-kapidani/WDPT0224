import express from 'express';
import * as authController from '../controllers/auth.controller.js';
import authorization from '../middlewares/authorization.js';

const authRouter = express.Router();

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.post('/logout', authorization, authController.logout);
authRouter.get('/me', authorization, authController.me);

export default authRouter;
