import { Schema, model } from 'mongoose';

const userSchema = new Schema(
    {
        googleId: String,
        firstName: String,
        lastName: String,
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true, // converte in minuscolo
            trim: true, // toglie gli spazi vuoti all'inizio e alla fine
        },
        password: {
            type: String,
        },
        verifiedAt: Date,
        verificationCode: String,
        // codeCreatedAt: Date
    },
    {
        collection: 'users',
        timestamps: true,
    }
);

const User = model('User', userSchema);
export default User;
