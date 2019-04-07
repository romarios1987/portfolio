import React, {Component} from 'react';
import {Container, Form, Button} from "react-bootstrap";

class Login extends Component {

  submitForm = (event) => {
    event.preventDefault();
    console.log(event);
  };
  
  render() {
    return (
          <Container>
            <h3 className='text-center second-title'>Login Form</h3>
            
            <Form onSubmit={(event) => this.submitForm(event)}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"/>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
    );
  }
}

export default Login;
