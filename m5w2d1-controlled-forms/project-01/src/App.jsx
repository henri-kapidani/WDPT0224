import Container from 'react-bootstrap/Container';
import Footer from './components/Footer';
import NavTop from './components/NavTop';
import Row from 'react-bootstrap/Row';
import Main from './components/Main';
// import MainObj from './components/MainObj';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div>
            <NavTop />
            <Container>
                <Row className="g-3">
                    <Main />
                    {/* <MainObj /> */}
                    <Sidebar />
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default App;
