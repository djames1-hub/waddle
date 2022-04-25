import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { createUser } from "./../../services/firebase/users";

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ name, email, password }) => {
    createUser(name, email, password).then((res)=>{
      // Account created successfully
      alert("Account Created Successfully!");
      window.location.href ="/";

  }).catch((error)=>{
      // Error with account creation, display error
      console.log(error);
  });
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto">
      <Form.Group className="mb-3 mx-5 mt-5" controlId="emailControl">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Enter email..." {...register("email")} />
      </Form.Group>
      <Form.Group className="mb-3 mx-5 mt-3" controlId="nameControl">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name..." {...register("name")}/>
      </Form.Group>
      <Form.Group className="mb-3 mx-5 mt-3" controlId="passwordControl">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Enter password..." {...register("password")}/>
      </Form.Group>
      <Button type="submit" className="mx-5">Submit</Button>
    </Form>
  );
};

export default SignUp;

