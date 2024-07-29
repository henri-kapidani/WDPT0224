import express from 'express';
import userRouter from './routes/user.router.js';

const port = 5000;

const server = express(); // inizializziamo il server

server.use(express.json()); // diciamo al server di gestire i body di tipo JSON delle richieste (il body verrà convertito in un oggetto js)

// ################## definiamo le rotte del nostro server ################## //

server.use('/prefisso', userRouter);

// mettiamo il server in ascolto alla porta stabilita
server.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
