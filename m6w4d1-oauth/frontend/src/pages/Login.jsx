import { useContext, useEffect } from 'react';
import { TokenContext } from '../Context';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [token, setToken] = useContext(TokenContext);
    const navigate = useNavigate();

    useEffect(() => {
        const objUrlParams = new URLSearchParams(window.location.search);
        const jwtToken = objUrlParams.get('token');
        if (jwtToken) {
            localStorage.setItem('token', jwtToken);

            // aggiungere al context
            setToken(jwtToken);

            // redirect da qualche parte
            navigate('/');
        }
    }, [setToken, navigate]);

    return (
        <div>
            <h1>Login</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter your password"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formKeepSigned">
                    <Form.Check type="checkbox" label="Keep me signed" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>{' '}
                or{' '}
                <a
                    href="http://localhost:5000/api/v1/login-google"
                    className="btn btn-primary"
                >
                    Login with Google
                </a>
                {/* <Button as="a" variant="primary" type="button">
                    Login with Google
                </Button> */}
            </Form>
        </div>
    );
}

export default Login;
