import 'dotenv/config'; // carica il file .env
import express from 'express';
import mongoose from 'mongoose';

const port = process.env.PORT || 5000;
const server = express();

await mongoose
    .connect(process.env.MONGODB_CONNECTION_URI)
    .then(() => console.log('connessione al db OK'))
    .catch((err) => console.log(err));

server.listen(port, () => {
    console.log('server is on');
});
