import { Schema, model } from 'mongoose';
// import authorSchema from './authorSchema';

const commentsSchema = new Schema(
    {
        content: {
            type: String,
            minLength: 3,
            maxLength: 100,
            trim: true, // toglie gli spazi vuoti all'inizio e alla fine
        },
        recipe: {
            type: Schema.Types.ObjectId,
            ref: 'Recipe',
        },
    },
    {
        collection: 'comments',
        timestamps: true,
    }
);

const Comment = model('Comment', commentsSchema);
export default Comment;
