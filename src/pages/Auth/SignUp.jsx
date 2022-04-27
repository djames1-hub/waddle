import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { createUser } from "./../../services/firebase/users";
import { FormText, Col, Row } from "react-bootstrap";

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ firstName, lastName, email, password }) => {
    createUser(firstName, lastName, email, password)
      .then((res) => {
        // Account created successfully
        alert("Account Created Successfully!");
        window.location.href = "/";
      })
      .catch((error) => {
        // Error with account creation, display error
        console.log(error);
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
      <Form.Group className="mb-3 mx-5 mt-3" controlId="firstNameControl">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter first name..."
          {...register("firstName")}
        />
      </Form.Group>
      <Form.Group className="mb-3 mx-5 mt-3" controlId="lastNameControl">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter last name..."
          {...register("lastName")}
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
          <Button type="submit" style={{marginTop:'1rem', width:'7rem', backgroundColor: 'white', color:'black' ,outline:'0.15rem solid blue'}} className="mx-5" onClick={() => {window.location.href = "/login";}}>Login</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default SignUp;
