import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PostCard({ character }) {
    return (
        <Col>
            <Card className="h-100">
                <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                    <h6>Status: {character.status}</h6>
                    <Card.Text>Species: {character.species}</Card.Text>
                    <Button variant="primary">Dettagli</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default PostCard;
