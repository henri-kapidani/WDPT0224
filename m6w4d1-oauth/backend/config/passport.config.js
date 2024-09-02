import GoogleStrategy from 'passport-google-oauth20';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const googleStrategy = new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${process.env.HOST}:${process.env.PORT}${process.env.GOOGLE_CALLBACK}`,
    },

    async function (accessToken, refreshToken, profile, passportNext) {
        // oggetto profile (non completo)
        // {
        //     _json: {
        //         given_name: Pinco,
        //         family_name: Pallino,
        //         email: asdf@asdf.asdf,
        //         sub: 12556878321
        //     }
        // }
        console.log(profile);

        const {
            given_name: firstName,
            family_name: lastName,
            email,
            sub: googleId,
        } = profile._json;

        // nel db verifichiamo l'esistenza dell'utente
        let user = await User.findOne({ googleId });

        // se non c'è lo creiamo
        if (!user) {
            const newUser = new User({
                googleId,
                firstName,
                lastName,
                email,
            });

            user = await newUser.save();
        }

        // TODO: sarebbe bene centralizzare la funzione di creazione del jwt
        // creiamo il jwt per l'utente
        jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET,
            {
                expiresIn: '1h',
            },
            (err, jwtToken) => {
                if (err) return res.status(500).send();

                // chiamiamo il prossimo middleware di Passport (NON di Express)
                return passportNext(null, { jwtToken }); // il primo argomento è l'eventuale errore, il secondo è il valore che Passport assegnerà a req.user (in questo caso un oggetto con la chiave jwtToken)
            }
        );
    }
);

export default googleStrategy;
