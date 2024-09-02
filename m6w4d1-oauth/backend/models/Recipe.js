import { Schema, model } from 'mongoose';
import authorSchema from './authorSchema.js';

const ingredientSchema = new Schema({
    name: String,
    quantity: Number,
    unit: String,
}); // gli schema che verranno embeddati NON devono avere la collection

const recipeSchema = new Schema(
    {
        title: {
            type: String,
            minLength: 3,
            maxLength: 50,
            trim: true, // toglie gli spazi vuoti all'inizio e alla fine
        },
        author: {
            type: authorSchema,
            required: true,
        },
        cookingTime: {
            type: Number,
            min: 0,
        },
        cover: String,
        likes: {
            type: Number,
            default: 0,
        },
        ingredients: [ingredientSchema], // array di oggetti di tipo ingredient con i valori embeddati (cioè inseriti nello stesso documento)
        // comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }], // alternativa per il referencing dei commenti
    },
    {
        collection: 'recipes',
    }
);

const Recipe = model('Recipe', recipeSchema);
export default Recipe;
