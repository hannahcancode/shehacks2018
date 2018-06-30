import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export const Login = () => (
  <FormGroup>
    <TextField type="text" color="primary" />
    <TextField type="password" color="primary" />
    <Button variant="raised" color="primary">
      Hello World
    </Button>
  </FormGroup>
);
