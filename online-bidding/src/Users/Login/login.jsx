
// Login.js:
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './login.css';
import { useNavigate } from "react-router-dom";
//import image from './Bidding-process.jpg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login attempted with:', { email, password });
    // Here you would typically send a request to your server
  };

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/user-registration`; 
        navigate(path);
    }

  return (
    <>
      {/* <img src={image}></img> */}
    <h1 className="login-title">Online Bidding Management</h1>
    <Container>
      <div className="login-wrapper">
       
      <div className="login-form-container">
        <h2 className="login-title">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="login-button">
              Login
            </Button>
            <Button variant="primary" onClick={routeChange} className="login-button">
              Register
            </Button>
          </Form>
        </div>
      </div>
    </Container></>
  );
}

export default Login;