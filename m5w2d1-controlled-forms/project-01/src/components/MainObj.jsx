import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { posts as originalPosts } from '../data/posts'; // TODO: provare con un json
import { useState } from 'react';

function MainObj() {
    const [posts, setPosts] = useState(originalPosts);
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        img: '',
        excerpt: '',
    });

    const updateInput = (event) => {
        const target = event.target;
        setFormData({ ...formData, [target.name]: target.value });
    };

    const clearForm = () => {
        setFormData({
            title: '',
            author: '',
            img: '',
            excerpt: '',
        });
    };

    const addPost = (event) => {
        event.preventDefault();

        // TODO: se il form è vuoto NON aggiungere il post

        // aggiornare lo stato con l'array dei post
        setPosts([
            ...posts,
            {
                ...formData,
                id: Math.floor(Math.random() * 99999),
            },
        ]);

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
                            onChange={updateInput}
                            name="title"
                            value={formData.title}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Autore</Form.Label>
                        <Form.Control
                            placeholder="Pinco Pallino"
                            onChange={updateInput}
                            name="author"
                            value={formData.author}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Immagine</Form.Label>
                        <Form.Control
                            placeholder="myimg.jpg"
                            onChange={updateInput}
                            name="img"
                            value={formData.img}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Descrizione</Form.Label>
                        <Form.Control
                            placeholder="Testo testo testo"
                            onChange={updateInput}
                            name="excerpt"
                            value={formData.excerpt}
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

export default MainObj;

/*
&&
true true -> true
true false -> false
false true -> false
false false -> false

5 && 'ciao' -> true && true -> true
ma javascript non ti restituisce true ma l'ultimo valore valutato, cioè 'ciao'
*/
