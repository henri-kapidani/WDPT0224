import Slide from './Slide';
import Row from 'react-bootstrap/Row';
import { books, saluto as nuovoNome } from '../data/books';

function Carousel() {
    return (
        <div>
            <h2>{nuovoNome}</h2>

            <ul>
                {books.map((book) => (
                    <li>{book.title}</li>
                ))}
            </ul>

            <Row>
                <Slide titolo={1} buttonText="cliccami" />
                <Slide buttonText="cliccami" />
                <Slide titolo="Slide Tre" buttonText="cliccami" />
                <Slide titolo="Slide Quattro" buttonText="cliccami" />
            </Row>
        </div>
    );
}

export default Carousel;
