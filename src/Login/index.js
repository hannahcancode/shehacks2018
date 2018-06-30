import React from "react";
import style from "./index.css";
import { Link } from "react-router-dom";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export const Login = () => (
  <div className="login">
    <FormGroup>
      <TextField type="text" classes="form" color="primary" />
      <TextField type="password" className="form" color="primary" />
      <Button
        variant="raised"
        className="form"
        color="primary"
        component={Link}
        to="/get-ready"
      >
        Login
      </Button>
    </FormGroup>
  </div>
);
