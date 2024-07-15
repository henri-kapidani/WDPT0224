import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PostList() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading)
        return (
            <div className="text-center p-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );

    return (
        <div>
            <h1>I nostri bei posts</h1>
            <Row xs={1} md={2} lg={3} className="g-3">
                {posts.slice(0, 10).map((post) => (
                    <Col key={post.id}>
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.body}</Card.Text>
                                {/* <Button variant="primary">Leggi</Button> */}

                                <Button
                                    as={Link}
                                    to={`/posts/${post.id}`}
                                    variant="primary"
                                >
                                    Leggi
                                </Button>

                                {/* <Link
                            to={`/posts/${post.id}`}
                            className="btn btn-primary"
                        >
                            Leggi
                        </Link> */}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default PostList;
