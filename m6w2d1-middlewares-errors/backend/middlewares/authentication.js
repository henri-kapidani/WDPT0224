export default (req, res, next) => {
    console.log('authentication');
    if (req.headers.authorization == 'Bearer token_valido') {
        // qui si potrebbero recuperare i dati dell'utente dal
        // db a aggiungerli alla richiesta, per uso dei
        // successivi middlawares
        req.authUser = 'dati utente loggato presi da MongoDB';
        next();
    } else {
        return res.status(401).send();
    }
};
