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

        // creare l'oggeto del post nuovo
        const newPost = {
            id: Math.floor(Math.random() * 99999),
            title, // title: title
            author,
            img,
            excerpt,
        };

        // aggiornare lo stato con l'array dei post
        setPosts([...posts, newPost]);

        // svuotiamo il form
        clearForm();
    };

    return (
        <Col xs={12} md={10}>
            <main className="py-4">
                <Form onSubmit={addPost}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            placeholder="Il mio bel titolo"
                            onChange={(event) => setTitle(event.target.value)}
                            value={title}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Author</Form.Label>
                        <Form.Control
                            placeholder="Pinco Pallino"
                            onChange={(event) => setAuthor(event.target.value)}
                            value={author}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            placeholder="myimg.jpg"
                            onChange={(event) => setImg(event.target.value)}
                            value={img}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Excerpt</Form.Label>
                        <Form.Control
                            placeholder="Testo testo testo"
                            onChange={(event) => setExcerpt(event.target.value)}
                            value={excerpt}
                        />
                    </Form.Group>

                    <Button type="submit">Aggiungi</Button>
                    <Button type="button" onClick={clearForm}>
                        Clear
                    </Button>
                </Form>

                <Row>
                    {posts.map((post) => (
                        <Col xs={12} sm={6} md={4} key={post.id}>
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
                                        Author:{' '}
                                        {post.author ? post.author : 'Guest'}
                                    </h6>
                                    <Card.Text>{post.excerpt}</Card.Text>
                                    <Button variant="primary">Read more</Button>
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

5 && 'ciao'
true && true
true -> 'ciao'
*/
