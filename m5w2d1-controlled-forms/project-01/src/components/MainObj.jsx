import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { posts } from '../data/posts'; // TODO: provare con un json
import { useState } from 'react';

function MainObj() {
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

    return (
        <Col xs={12} md={10}>
            <main className="py-4">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            placeholder="Il mio bel titolo"
                            onChange={updateInput}
                            name="title"
                            value={formData.title}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Author</Form.Label>
                        <Form.Control
                            placeholder="Pinco Pallino"
                            onChange={updateInput}
                            name="author"
                            value={formData.author}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            placeholder="myimg.jpg"
                            onChange={updateInput}
                            name="img"
                            value={formData.img}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Excerpt</Form.Label>
                        <Form.Control
                            placeholder="Testo testo testo"
                            onChange={updateInput}
                            name="excerpt"
                            value={formData.excerpt}
                        />
                    </Form.Group>

                    <Button type="submit">Aggiungi</Button>
                </Form>

                <Row>
                    {posts.map((post) => (
                        <Col xs={12} sm={6} md={4} key={post.id}>
                            <Card>
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

export default MainObj;

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
