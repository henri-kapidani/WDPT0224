import express from 'express';

const router = express.Router();

router.get('/', (request, response) => {
    response.status(404).send(request.query); // per recuperare i valori dalla query string
    // response.send({ saluto: 'ciao a tutti' });
});

router.get('/users/:id', (request, response) => {
    const id = request.params.id; // per recuperare i parametri dichiarati nel persorso
    // const { id } = request.params;

    response.send(`Qui andranno i dati del post con id ${id}`);
});

router.post('/users', (request, response) => {
    response.send(request.body); // per recuperare i valori dal body della richiesta
});

router.put('/users/:id', (request, response) => {
    response.send(
        `Verrà modificato lo user con id ${
            request.params.id
        } e questi sono i nuovi dati ${JSON.stringify(request.body)}`
    );
});

router.delete('/users/:id', (request, response) => {
    response.send(`Verrà eliminato il post con id ${request.params.id}`);
});

export default router;
