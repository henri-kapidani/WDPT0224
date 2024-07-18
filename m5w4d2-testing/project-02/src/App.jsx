import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HeaderSimple from './components/HeaderSimple';
import HeaderBootstrap from './components/HeaderBootstrap';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Post from './pages/Post';
import PostList from './pages/PostList';
import NotFound from './pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            {/* <HeaderSimple /> */}
            <HeaderBootstrap />
            <Container>
                <Row>
                    <Col xs={12} md={10}>
                        {/* Parte che differisce tra le varie pagine */}
                        <Routes>
                            {/* Verrà renderizzato uno solo di questi componenti */}
                            {/* in base all'indirizzo in cui ci troviamo */}
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/posts" element={<PostList />} />

                            <Route path="/posts/:id" element={<Post />} />
                            {/* esempi di indirizzi che vengono catturati da questa Route:s
                                /posts/2
                                /posts/10
                                /posts/ciao
                            */}

                            <Route path="/404" element={<NotFound />} />
                            <Route path="/*" element={<Navigate to="/404" />} />
                        </Routes>
                    </Col>
                    <Col xs={12} md={2}>
                        <Sidebar />
                    </Col>
                </Row>
            </Container>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
