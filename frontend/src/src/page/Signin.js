import React, { useState } from 'react'
import {
  Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input, CardFooter, CardHeader
} from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios';

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = async () => {
    try {
      if (!email || !password) {
        toast.error("All fields are required to fill");
        return;
      }
      const response = await axios.post('http://localhost:8080/api/users/login', {
        email,
        password
      });
         
      if (response?.status === 200) {
        localStorage.setItem('userauth', JSON.stringify(response?.data));
        const user = JSON.parse(localStorage.getItem('userauth'));
        const userName = user.user.name;
        toast.success(`Welcome, ${userName}!`);
        navigate("/home");
        window.location.reload();
      } else {
        toast.error("Error in login. Please try again.");
      }

    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.");
    }
  }
  const handleSubmit = e => {
    e.preventDefault()
    handleSignUp()
  }


  return (
    <Container className="text-center">
      <Row>
        <Col lg={6} className="offset-lg-3 mt-5">
          <Card>
            <Form onSubmit={handleSubmit}>
              <CardHeader className="">Signin here</CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for="email" sm={3}>
                    Email
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Provide your email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password" sm={3}>
                    Password
                  </Label>
                  <Col sm={9}>
                  <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Your password here"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
      <button className='w-50 mx-auto btn btn-primary d-block' type="submit"  color="primary">
        Sign In
      </button>
     
    </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Signin;