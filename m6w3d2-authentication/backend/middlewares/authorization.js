import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export default (req, res, next) => {
    // verifacere se c'è l'header Authorization e se è di tipo Bearer
    // Authorization: Bearer asdhklasdre.bkjdskdfhkshksdfjsdbf.ddsfsdfsdfsdfsddf

    if (!req.headers.authorization) return res.status(401).send();
    const parts = req.headers.authorization.split(' ');
    if (parts.length != 2) return res.status(401).send();
    if (parts[0] != 'Bearer') return res.status(401).send();

    const jwtToken = parts[1];

    // verificare la firma del token
    jwt.verify(jwtToken, process.env.JWT_SECRET, async (err, payload) => {
        // errore: probabilmente il token è stato manomesso
        if (err) return res.status(401).send();

        // recuperiamo i dati dell'utente dal database escludendo il campo password
        const user = await User.findById(payload.userId).select('-password');

        // l'utente potrebbe aver eliminato l'account nel frattempo e quindi non esistere più nel database
        if (!user) return res.status(401).send();

        // aggiungiamo i dati dell'utente loggato all'oggetto req in maniera
        // da essere utilizzabili dai middlawares successivi in caso
        // ne avessero bisogno
        req.loggedUser = user;
        console.log(user);

        // chiamiamo il prossimo middlaware
        next();
    });
};
