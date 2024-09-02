import express from 'express';
import * as authController from '../controllers/auth.controller.js';
import authorization from '../middlewares/authorization.js';
import passport from 'passport';

const authRouter = express.Router();

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.post('/logout', authorization, authController.logout);
authRouter.get('/me', authorization, authController.me);

// lo scopo di questa rotta è di ridirezionarci alla pagina di Google
// passando l'app id e il segreto in maniera che ci identifichi
// il middleware fa già tutto, non è necessario un controller
authRouter.get(
    '/login-google',
    passport.authenticate('google', { scope: ['profile', 'email'] }) // middleware di passport che ci ridireziona alla pagina di Google
);

// questa rotta recupera l'utente dal db oppure lo crea se non è già presente
// poi genera il jwt con l'id dell'utente nel payload
// quindi ridireziona al frontend passando il jwt come query string nell'url
authRouter.get(
    '/callback-google',
    passport.authenticate('google', { session: false }), // riceve i dati del profilo e crea il jwt aggiungendolo in req.user
    authController.callbackGoogle // ridireziona al frontend passando il jwt come query string nell'url
);

export default authRouter;
