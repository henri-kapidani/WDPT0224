import express from 'express';
import authentication from '../middlewares/authentication.js';

const router = express.Router();

// router.get('/', (req, res, next) => {
//     console.log(req.headers);
//     if (req.headers.authorization == 'Bearer token_valido') {
//         return res.send('ecco i tuoi dati');
//     } else {
//         return res.status(401).send();
//     }
// });

// middleware applicato ad una specifica rotta
router.get('/', authentication, (req, res) => {
    console.log('router /recipes');
    console.log('req.authuser:', req.authUser);
    return res.send('risponde il router /recipes');
});

router.get('/a', (req, res, next) => {
    console.log('router /recipes/a');
    const selector = 1;

    if (selector === 1) {
        next();
    } else if (selector === 2) {
        next('errore');
    } else {
        return res.send('risponde il router /recipes/a');
    }
});

router.get('/b', (req, res) => {
    console.log('router /recipes/b');
    const selector = 1;

    if (selector === 1) {
        next();
    } else if (selector === 2) {
        next('errore');
    } else {
        return res.send('risponde il router /recipes/b');
    }
});

export default router;
