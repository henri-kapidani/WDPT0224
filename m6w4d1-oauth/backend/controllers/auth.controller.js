import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
    // verificare che la mail non sia già utilizzata
    const user = await User.findOne({ email: req.body.email });

    if (user) return res.status(500).send('Mail in uso'); // FIXME: check the code

    // se non utilizzata la mail allora salvare il nuovo utente con la password hashata
    // const newUser = new User({...req.body, password: await bcrypt.hash(req.body.password, 10)})
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        // password: req.body.password // NOOOOO
        password: await bcrypt.hash(req.body.password, 10),
        verifiedAt: new Date(),
    });

    const userCreated = await newUser.save();
    res.send(userCreated);
};

export const login = async (req, res) => {
    // cercare la mail nel db
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(401).send('credenziale sbagliate');

    // se la mail c'è verificare la correttezza della password
    if (!(await bcrypt.compare(req.body.password, user.password))) {
        return res.status(401).send('credenziale sbagliate');
    }

    // se la password è corretta generare il jwt e restituirlo
    jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET,
        {
            expiresIn: '1h',
        },
        (err, jwtToken) => {
            if (err) return res.status(500).send();

            return res.send({
                token: jwtToken,
            });
        }
    );
};

// per i jwt base non richide backend ma va solo tolto il token dal localStorage
export const logout = (req, res) => {};

export const me = (req, res) => {
    return res.send(req.loggedUser);
};

export const callbackGoogle = (req, res) => {
    // qui facciamo il redirect al frontend passandogli nella query string il jwt creato in passport che l'ha aggiunto in req.user
    res.redirect(`http://localhost:3000/login?token=${req.user.jwtToken}`);
};
