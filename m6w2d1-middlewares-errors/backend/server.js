import express from 'express';
import 'dotenv/config';
import router from './router/recipe.router.js';
import authentication from './middlewares/authentication.js';
import errorHandlerD from './middlewares/errorHandlerD.js';

const port = process.env.PORT;
const host = process.env.HOST;

const app = express();

// app.use((req, res, next) => {
//     if (req.headers.authorization == 'Bearer token_valido') {
//         req.authUser;
//         next();
//     } else {
//         return res.status(401).send();
//     }
// });

// app.use(authentication); // middleware globale

// router
app.use('/recipes', router);
// app.use('/receipes', authentication, router); // middlaware applicato ad uno specifico router

// error handler A
app.use((err, req, res, next) => {
    console.log('error handler A');
    const selector = 1;

    if (selector === 1) {
        next();
    } else if (selector === 2) {
        next('altro errore');
    } else {
        return res.status(404).send('risponde errorHandlerA');
    }
});

// middlaware B
app.use((req, res, next) => {
    console.log('middlaware B');
    const selector = 1;

    if (selector === 1) {
        next();
    } else if (selector === 2) {
        next('altro errore');
    } else {
        return res.send('risponde il middlaware B');
    }
});

// middlaware C
app.use((req, res, next) => {
    console.log('middlaware C');
    const selector = 1;

    if (selector === 1) {
        next();
    } else if (selector === 2) {
        next('altro errore');
    } else {
        return res.send('risponde il middlaware C');
    }
});

// error handler D
app.use(errorHandlerD);

app.listen(port, () => console.log(`server is listening on ${host}:${port}`));
