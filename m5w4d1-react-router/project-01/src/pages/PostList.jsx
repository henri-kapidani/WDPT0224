import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );

    return (
        <div>
            <h1>I nostri bei posts</h1>
            {posts.map((post) => (
                <Card className="h-100" key={post.id}>
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
            ))}
        </div>
    );
}

export default PostList;
