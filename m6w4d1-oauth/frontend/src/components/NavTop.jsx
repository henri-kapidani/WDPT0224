import { useContext } from 'react';
import { TokenContext, UserContext } from '../Context';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Container, Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function NavTop() {
    const [token, setToken] = useContext(TokenContext);
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.setItem('token', '');
        setToken('');
        navigate('/');
    };

    return (
        <Navbar expand="md" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Epi Zafferano
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Recipes" id="recipesDropdown">
                            <NavDropdown.Item as={NavLink} to="/recipes">
                                List
                            </NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/recipes/new">
                                Add
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {!user && (
                            <Nav.Link as={NavLink} to="/login">
                                Login
                            </Nav.Link>
                        )}
                        {!user && (
                            <Nav.Link as={NavLink} to="/register">
                                Register
                            </Nav.Link>
                        )}
                        {user && (
                            <NavDropdown
                                title={`Hello ${user.firstName}`}
                                id="recipesDropdown"
                            >
                                <NavDropdown.Item as={NavLink} to="/profile">
                                    Profile
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={logout}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavTop;
