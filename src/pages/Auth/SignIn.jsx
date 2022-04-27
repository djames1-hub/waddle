import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { signIn } from "./../../services/firebase/users";
import { Col } from "react-bootstrap";

const SignIn = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ email, password }) => {
    signIn(email, password)
      .then((res) => {
        // Account logged in successfully
        window.location.href = "/";
      })
      .catch((error) => {
        // Error with account creation, display error
        console.log(error);
        alert(error);
      });
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto">
      <Form.Group className="mb-3 mx-5 mt-5" controlId="emailControl">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email..."
          {...register("email")}
        />
      </Form.Group>
      <Form.Group className="mb-3 mx-5 mt-3" controlId="passwordControl">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter password..."
          {...register("password")}
        />
      </Form.Group>
      <Form.Group>
        <Col md={2}>
          <Button type="submit" style={{marginTop:'1rem', width:'7rem', outline:'0.15rem solid blue'}} className="mx-5">Submit</Button>
          <Button className="mx-5" style={{marginTop:'1rem', width:'7rem', backgroundColor: 'white', color:'black' ,outline:'0.15rem solid blue'}} onClick={() => { window.location.href = "/sign-up";}}>Sign Up</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default SignIn;
