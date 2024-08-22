import { Schema, model } from 'mongoose';

const authorSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, // converte in minuscolo
        trim: true, // toglie gli spazi vuoti all'inizio e alla fine
    },
});

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
    },
    {
        collection: 'recipes2',
    }
);

const Recipe = model('Recipe', recipeSchema);
export default Recipe;
