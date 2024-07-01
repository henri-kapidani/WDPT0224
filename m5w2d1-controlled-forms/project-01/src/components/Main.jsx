import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { posts as originalPosts } from '../data/posts'; // TODO: provare con un json
import { useState } from 'react';

function Main() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [img, setImg] = useState('');
    const [excerpt, setExcerpt] = useState('');

    const [posts, setPosts] = useState(originalPosts);

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

    return (
        <Col xs={12} md={9}>
            <main className="py-4">
                <Form onSubmit={addPost} className="mb-3">
                    {/* preferire l'onSubmit sul form all'onClick sul bottone perchè l'onSubmit si attiva sia al click del bottone che al tasto invio su un input */}
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
                </Form>

                <Row className="g-3">
                    {posts.map((post) => (
                        // questa col potrebbe essere spostata su un componente a parte
                        <Col xs={12} sm={6} lg={4} key={post.id}>
                            <Card className="h-100">
                                {post.img && (
                                    <Card.Img
                                        variant="top"
                                        src={'/images/' + post.img}
                                    />
                                )}
                                <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <h6>
                                        Autore:{' '}
                                        {post.author ? post.author : 'Guest'}
                                    </h6>
                                    <Card.Text>{post.excerpt}</Card.Text>
                                    <Button variant="primary">
                                        Leggi tutto
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </main>
        </Col>
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
