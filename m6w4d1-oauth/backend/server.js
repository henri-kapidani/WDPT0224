import 'dotenv/config';
import express from 'express';
import router from './router/recipe.router.js';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import mongoose from 'mongoose';
import authRouter from './router/auth.router.js';
import passport from 'passport';
import GoogleStrategy from './config/passport.config.js';

const host = process.env.HOST;
const port = process.env.PORT;

const app = express();

passport.use('google', GoogleStrategy);

app.use(morgan('dev')); // serve a fare i log delle richieste (per ora i logs li stampa sul termianle)
// app.use(helmet()); // aggiunge alcuni headers alle risposte e ne nasconde altri per migliorare la sicurezza dell'api
app.use(cors()); // permette la comunicazine tra backend e frontend su domini diversi

app.use(express.json()); // fa il parsing del body delle richieste che hanno l'header Content-Type: application/json

app.use('/uploads', express.static('./uploads')); // permette di rendere disponibili on line i contenuti di una cartella sul disco
app.use('/api/v1/recipes', router);
app.use('/api/v1', authRouter);

// middlaware 404
app.use((req, res) => res.status(404).send());

await mongoose
    .connect(process.env.MONGODB_CONNECTION_URI)
    .then(() => console.log('Database OK'))
    .catch((err) => console.log('Errore DB:', err));

app.listen(port, () => console.log(`server is listening on ${host}:${port}`));
