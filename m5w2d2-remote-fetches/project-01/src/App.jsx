import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavTop from './components/NavTop';
import Main from './components/Main';
import MainButton from './components/MainButton';
// import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <NavTop />
            <Container>
                <Row>
                    <Col xs={12} md={12}>
                        <MainButton />
                        {/* <Main /> */}
                    </Col>
                    {/* <Col xs={12} md={3}>
                        <Sidebar />
                    </Col> */}
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default App;
