import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import style from "./index.css";

export const GetReady = () => (
  <div className="getReady">
    <p>First, we need a photo!</p>
    <div className="button">
      <Button variant="raised" color="primary" component={Link} to="/photo">
        Take my photo!
      </Button>
    </div>
  </div>
);
