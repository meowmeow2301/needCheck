
'use client'
import { FormLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import {Col, Row} from 'react-bootstrap';
import { useState, useEffect} from 'react';

const Login = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState('');

    // useEffect(() => {
    //     const handleLogin = () => {
    //         fetch('https://example.com/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ email, password }),
    //         })
    //         .then(response => {
    //             if (!response.ok) {
    //                 console.log('Failed to login');
    //             }
    //             // Redirect or do something else after successful login
    //         })
    //         .catch(error => {
    //             // setError('Failed to login. Please try again.');
    //             // console.error('Error logging in:', error);
                
    //             console.log(error);
    //         });
    //     };

    //     // Perform login when component mounts
    //     handleLogin();
    // }, [email, password]);
    return (
        <Row  className=' py-auto' >
            <div>
                <h1 className=' text-primary text-center  pt-5 mt-4'>Login</h1>
            </div>
        <Col md={5} className='mx-auto mt-3 pt-2 border border-secondary rounded'>
            <FormLabel>Email</FormLabel>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="nhập email"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
                <InputGroup.Text id="basic-addon2">
                    @gmail.com
                </InputGroup.Text>
            </InputGroup>
            <FormLabel>Password</FormLabel>
            <InputGroup>
            <Form.Control
                    placeholder="nhập password"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <span className='d-flex align-content-center justify-content-center pt-3 pb-3'>
            <Button variant= "primary">Login</Button>
            </span>
        </Col>
        </Row>
    )
}

export default Login;