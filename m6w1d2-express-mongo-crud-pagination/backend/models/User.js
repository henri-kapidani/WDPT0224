import { Schema, model } from 'mongoose';

const userSchema = new Schema(
    {
        name: {
            type: String,
            minLength: 3,
            maxLength: 20,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        age: {
            type: Number,
            min: 0,
            max: 100,
        },
        role: {
            type: String,
            enum: ['User', 'Admin'],
            default: 'User',
        },
        approved: Boolean,
    },
    {
        collection: 'users',
    }
);

// export default model('User', userSchema);
// oppure
const User = model('User', userSchema);
export default User;
