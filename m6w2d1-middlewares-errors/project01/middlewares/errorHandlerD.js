export default (err, req, res, next) => {
    console.log('error handler D');
    if (err.type == 'mogoose_connection') console.log('errore');
    return res.status(500).send('risponde errorHandlerD');
};
