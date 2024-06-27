import Carousel from './Carousel';
import Counter from './Counter';
import Container from 'react-bootstrap/Container';

function Main() {
    return (
        <Container>
            <h1 className="text-center mb-5">Io sono il main</h1>
            <main>
                <Counter />
                <Carousel />
            </main>
        </Container>
    );
}

export default Main;
