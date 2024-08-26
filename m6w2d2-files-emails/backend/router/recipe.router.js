import express from 'express';
import * as recipeController from '../controllers/recipe.controller.js';
import uploadLocal from '../middlewares/uploadLocal.js';
import uploadCloudinary from '../middlewares/uploadCloudinary.js';

const router = express.Router();

router.get('/', recipeController.readMultiple);
// router.post('/', uploadLocal.single('cover'), recipeController.createOne);
router.post('/', uploadCloudinary.single('cover'), recipeController.createOne);

router.post('/send-mail', recipeController.sendMailMiddleware);

export default router;
