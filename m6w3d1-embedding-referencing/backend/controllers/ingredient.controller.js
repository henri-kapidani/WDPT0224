import Recipe from '../models/Recipe.js';

// /:recipeId/ingredients
export const readAll = async (req, res, next) => {
    try {
        const recipe = await Recipe.findById(req.params.recipeId);
        if (!recipe) return next(); // finisce nel middlaware della 404

        return res.send(recipe.ingredients);
    } catch {
        return res.status(500).send();
    }
};

export const readOneIngredient = async (req, res, next) => {
    try {
        const recipe = await Recipe.findById(req.params.recipeId); // restituisce null se non trova la risorsa
        if (!recipe) return next(); // finisce nel middlaware della 404

        const ingredient = recipe.ingredients.id(req.params.ingredientId); // restituisce null se non trova la risorsa
        if (!ingredient) return next(); // finisce nel middlaware della 404

        return res.send(ingredient);
    } catch {
        return res.status(500).send();
    }
};

export const addOne = async (req, res, next) => {
    try {
        const recipe = await Recipe.findById(req.params.recipeId);
        if (!recipe) return next(); // finisce nel middlaware della 404

        recipe.ingredients.push(req.body);
        const modifiedRecipe = await recipe.save(); // importate altrimenti non salva la modifica nel db

        return res.status(201).send({
            data: recipe,
        });
    } catch {
        return res.status(500).send();
    }
};

export const updateOneIngredient = async (req, res, next) => {
    try {
        const recipe = await Recipe.findById(req.params.recipeId);
        if (!recipe) return next(); // finisce nel middlaware della 404

        const oldIngredient = recipe.ingredients.id(req.params.ingredientId);
        if (!oldIngredient) return next(); // finisce nel middlaware della 404

        // modificare l'oggetto stesso, mai generarne uno nuovo
        oldIngredient.quantity = req.body.quantity
            ? req.body.quantity
            : oldIngredient.quantity;
        oldIngredient.name = req.body.name ? req.body.name : oldIngredient.name;

        const updatedRecipe = await recipe.save(); // importate altrimenti non salva la modifica nel db

        return res.send({
            data: updatedRecipe,
        });
    } catch {
        return res.status(500).send();
    }
};

export const deleteOneIngredient = async (req, res, next) => {
    try {
        const recipe = await Recipe.findById(req.params.recipeId);
        if (!recipe) return next(); // finisce nel middlaware della 404

        const ingredient = recipe.ingredients.id(req.params.ingredientId);
        if (!ingredient) return next(); // finisce nel middlaware della 404

        ingredient.deleteOne(); // .remove() è deprecato

        const updatedRecipe = await recipe.save(); // importate altrimenti non salva la modifica nel db

        return res.send({
            data: updatedRecipe,
        });
    } catch {
        return res.status(500).send();
    }
};
