import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import PostCard from './PostCard';
import Spinner from 'react-bootstrap/Spinner';

function MainButton() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const loadPosts = () => {
        setIsloading(true);
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                if (!response.ok) throw new Error('era una 404');

                return response.json();
            })
            .then((data) => setPosts(data))
            .catch((error) => setErrorMessage(error.message))
            .finally(() => setIsloading(false));
    };

    // TODO: convert to async/await

    return (
        <main className="py-4">
            <Button variant="primary" onClick={loadPosts}>
                Carica post
            </Button>

            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

            <h2>Press the button to load posts...</h2>

            {isLoading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
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

export default MainButton;
