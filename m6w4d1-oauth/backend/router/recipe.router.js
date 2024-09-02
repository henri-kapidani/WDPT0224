import express from 'express';
import * as recipeController from '../controllers/recipe.controller.js';
import * as commentController from '../controllers/comment.controller.js';
import uploadLocal from '../middlewares/uploadLocal.js';
import uploadCloudinary from '../middlewares/uploadCloudinary.js';
import {
    readAll as readAllIngredients,
    addOne as addOneIngredients,
    readOneIngredient,
    updateOneIngredient,
    deleteOneIngredient,
} from '../controllers/ingredient.controller.js';
import authorization from '../middlewares/authorization.js';

const router = express.Router();

router.use(authorization);

router.get('/', recipeController.readMultiple);
// router.post('/', uploadLocal.single('cover'), recipeController.createOne);
// router.post('/', uploadCloudinary.single('cover'), recipeController.createOne);
router.post('/', recipeController.createOne);

router.post('/send-mail', recipeController.sendMailMiddleware);

router.get('/:recipeId/comments', commentController.readAll);
router.post('/:recipeId/comments', commentController.createOne);

router.get('/:recipeId/ingredients', readAllIngredients);
router.get('/:recipeId/ingredients/:ingredientId', readOneIngredient);
router.post('/:recipeId/ingredients', addOneIngredients);
router.put('/:recipeId/ingredients/:ingredientId', updateOneIngredient);
router.delete('/:recipeId/ingredients/:ingredientId', deleteOneIngredient);

export default router;
