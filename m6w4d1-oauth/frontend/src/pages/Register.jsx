import { Button, Form } from 'react-bootstrap';

function Register() {
    return (
        <div>
            <h1>Register</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter a strong password"
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="formPasswordConfirmation"
                >
                    <Form.Label>Password confirmation</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm the password"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formKeepSigned">
                    <Form.Check type="checkbox" label="Keep me signed" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>{' '}
                or{' '}
                <a
                    href="http://localhost:5000/api/v1/login-google"
                    className="btn btn-primary"
                >
                    Sign up with Google
                </a>
                {/* <Button as="a" variant="primary" type="button">
                    Sign up with Google
                </Button> */}
            </Form>
        </div>
    );
}

export default Register;
