import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import userRouter from './router/user.router.js';

const port = process.env.PORT || 5000;

const app = express();

await mongoose
    .connect(process.env.MONGO_STRING)
    .then(() => console.log('Database connesso!'))
    .catch((err) => console.log(err));

app.use(cors()); // serve a risolvere i problemi di CORS quando si collega l'api con il frontend
app.use(express.json());

app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Server avviato su ${process.env.HOST}:${port}`);
});
