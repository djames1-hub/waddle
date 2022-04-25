import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { signIn } from "./../../services/firebase/users";


const SignIn = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ email, password }) => {
    signIn(email, password).then((res)=>{
      // Account logged in successfully
      window.location.href ="/";

  }).catch((error)=>{
      // Error with account creation, display error
      console.log(error);
      alert (error);
  })
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto">
      <Form.Group className="mb-3 mx-5 mt-5" controlId="emailControl">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Enter email..." {...register("email")} />
      </Form.Group>
      <Form.Group className="mb-3 mx-5 mt-3" controlId="passwordControl">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Enter password..." {...register("password")}/>
      </Form.Group>
      <Button type="submit" className="mx-5">Submit</Button>
    </Form>
  );
};

export default SignIn;
