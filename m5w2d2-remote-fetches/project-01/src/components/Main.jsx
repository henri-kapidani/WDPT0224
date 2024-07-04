import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import PostCard from './PostCard';

function Main() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [img, setImg] = useState('');
    const [excerpt, setExcerpt] = useState('');

    const [posts, setPosts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const clearForm = () => {
        setTitle('');
        setAuthor('');
        setImg('');
        setExcerpt('');
    };

    const addPost = (event) => {
        event.preventDefault();

        // TODO: se il form è vuoto NON aggiungere il post

        // creare l'oggeto del post nuovo
        const newPost = {
            id: Math.floor(Math.random() * 99999),
            title, // equivale a scrivere title: title
            author, // equivale a scrivere author: author
            img, // equivale a scrivere img: img
            excerpt, // equivale a scrivere excerpt: excerpt
        };

        // aggiornare lo stato con l'array dei post
        setPosts([...posts, newPost]);

        // svuotiamo il form
        clearForm();
    };

    const loadPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/ciao')
            .then((response) => response.json())
            .then((data) => setPosts(data));
    };

    return (
        <main className="py-4">
            {/* <Form onSubmit={addPost} className="mb-3">
                <Form.Group className="mb-3">
                    <Form.Label>Titolo</Form.Label>
                    <Form.Control
                        placeholder="Il mio bel titolo"
                        onChange={(event) => setTitle(event.target.value)}
                        value={title}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Autore</Form.Label>
                    <Form.Control
                        placeholder="Pinco Pallino"
                        onChange={(event) => setAuthor(event.target.value)}
                        value={author}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Immagine</Form.Label>
                    <Form.Control
                        placeholder="myimg.jpg"
                        onChange={(event) => setImg(event.target.value)}
                        value={img}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Descrizione</Form.Label>
                    <Form.Control
                        placeholder="Testo testo testo"
                        onChange={(event) => setExcerpt(event.target.value)}
                        value={excerpt}
                    />
                </Form.Group>

                <Button type="submit" className="me-2">
                    Aggiungi
                </Button>
                <Button type="button" variant="warning" onClick={clearForm}>
                    Resetta
                </Button>
            </Form> */}

            <Button variant="primary" onClick={loadPosts}>
                Carica post
            </Button>

            {!posts ? (
                <h2>Loading...</h2>
            ) : posts.length === 0 ? (
                <h2>Non ci sono post al momento</h2>
            ) : (
                <Row xs={1} sm={2} lg={3} className="g-3">
                    {posts.map((post) => (
                        <PostCard post={post} key={post.id} />
                    ))}
                </Row>
            )}
        </main>
    );
}

export default Main;

/*
&&
true true -> true
true false -> false
false true -> false
false false -> false

5 && 'ciao' -> true && true -> true
ma javascript non ti restituisce true ma l'ultimo valore valutato, cioè 'ciao'
*/
