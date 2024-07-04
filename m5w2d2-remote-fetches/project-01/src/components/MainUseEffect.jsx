import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';

function MainButton() {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [searchString, setSearchString] = useState('');

    const searchCharacter = async () => {
        try {
            setIsloading(true);
            const response = await fetch(
                `https://rickandmortyapi.com/api/character/?name=${searchString}`
            );
            if (!response.ok) throw new Error('era una 404');
            const data = await response.json();
            setCharacters(data.results);
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setIsloading(false);
        }
    };

    // useEffect vuole una collback sincrona, ecco perchè qui dobbiamo mettere
    // la funzione asincrona che abbiamo creato dentro un'altra funzione sincrona
    useEffect(() => {
        // ATTENZIONE: qui le graffe ci vogliono
        // perchè senza graffe si attiva il return implicito delle arrow functions
        // e useEffect accetta solo funzioni (la clean-up function) come valore di return
        // altri valori di return generano un errore
        searchCharacter();
    }, [searchString]);
    // senza secondo argomento esegue la callback ad ogni rendering
    // secondo argomento []: esegue la callaback solo al primo montaggio del componente
    // secondo argomento [var1, var2]: esegeue la callback al cambiamento di una qualsiasi delle variabili nell'array

    return (
        <main className="py-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Search</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="search something..."
                    onChange={(event) => setSearchString(event.target.value)}
                    value={searchString}
                />
            </Form.Group>

            <h1>Rick and Morty Characters</h1>

            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

            {/* se il caricamento è troppo veloce e non si vede lo spinner, dal Network tab dell'inspector potete attivare lo Slow 3G */}
            {isLoading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : characters.length === 0 ? (
                <h2>Non ci sono post al momento</h2>
            ) : (
                <Row xs={1} sm={2} lg={3} className="g-3">
                    {characters.map((character) => (
                        <CharacterCard
                            character={character}
                            key={character.id}
                        />
                    ))}
                </Row>
            )}
        </main>
    );
}

export default MainButton;
