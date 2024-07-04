import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PostCard({ post }) {
    return (
        <Col>
            <Card className="h-100">
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <h6>Autore: {post.userId}</h6>
                    <Card.Text>{post.body}</Card.Text>
                    <Button variant="primary">Leggi tutto</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default PostCard;
