import React from "react";
import style from "./index.css";
import { Link } from "react-router-dom";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Logo from "../assets/logo.png";

export const Login = () => (
  <div className="login">
    <img src={Logo} className="logo" />
    <FormGroup class="form">
      <TextField type="text" class="formField" color="primary" />
      <TextField type="password" class="formField" color="primary" />
      <Button variant="raised" color="primary" component={Link} to="/get-ready">
        Login
      </Button>
    </FormGroup>
  </div>
);
