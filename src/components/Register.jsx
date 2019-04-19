import React from "react";
import { Button, Form, Input } from "reactstrap";

const Register = props => {
  return (
    <Form className="mx-auto col-12 col-md-8 col-lg-6">
      <h2 className="text-info">New Game</h2>
      <p className="font-italic">Enter your name</p>

      <Input
        className="border-success"
        value={props.name}
        onChange={props.onChangeTextInput}
        type="text"
        name="name"
        placeholder="Name"
      />

      <Button className="mt-5 btn btn-warning" onClick={props.onClickButton}>
        Start
      </Button>
    </Form>
  );
};

export default Register;
