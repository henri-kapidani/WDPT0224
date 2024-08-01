import express from 'express';
import User from '../models/User.js';

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
    // andare nel database e recuperare gli utenti paginati
    try {
        // esempio di query string per avere la terza pagina
        // con 5 elementi per pagina: ?page=3&perPage=5
        const page = req.query.page || 1;
        const perPage = req.query.perPage || 3;

        const users = await User.find({})
            .sort({ name: 1, age: -1 })
            .skip((page - 1) * perPage)
            .limit(perPage);

        const totalResults = await User.countDocuments();
        const totalPages = Math.ceil(totalResults / perPage);

        res.send({
            dati: users,
            totalPages,
            totalResults,
            page,
        });
    } catch (err) {
        res.status(500).send();
    }
});

userRouter.get('/:userId', async (req, res) => {
    // andare nel database e recuperari i dati dell'utente con id pari a userId
    try {
        const id = req.params.userId;

        const user = await User.findById(id);
        if (!user) res.status(404).send();
        else res.send(user);
    } catch (err) {
        console.log(error);
        res.status(500).send({ message: 'Not Found' });
    }
});

userRouter.post('/', async (req, res) => {
    // chiedere al database di creare il nuovo utente
    try {
        const userData = req.body;
        const newUser = new User(userData);

        const createdUser = await newUser.save();
        res.status(201).send(createdUser);
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: 'qualcosa non va' });
    }
});

userRouter.put('/:userId', async (req, res) => {
    // chiedere al database di creare il nuovo utente
    try {
        const id = req.params.userId;
        const userData = req.body;

        const user = await User.findByIdAndUpdate(id, userData, { new: true });
        // { new: true } fa si che l'update restituisca il nuovo documento e non quello originale
        res.send(user);
    } catch (err) {
        res.status(500).send();
    }
});

userRouter.delete('/:userId', async (req, res) => {
    // chiedere al database di eliminare l'utente
    try {
        const id = req.params.userId;
        await User.findByIdAndDelete(id);
        res.send({ message: 'utente eliminato' });
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
});

export default userRouter;
