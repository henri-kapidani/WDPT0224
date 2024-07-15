import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

function Post() {
    const { id } = useParams(); // esempio: { id: 'ciao' }
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                if (res.status === 404) throw new Error('404');
                return res.json();
            })
            .then((data) => setPost(data))
            .catch((error) => navigate('/404'))
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
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

export default Post;
