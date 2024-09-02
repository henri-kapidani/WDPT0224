import { Schema } from 'mongoose';

const authorSchema = new Schema(
    {
        name: String,
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true, // converte in minuscolo
            trim: true, // toglie gli spazi vuoti all'inizio e alla fine
        },
    }
    // {
    //     _id: false,
    // }
);

export default authorSchema;
