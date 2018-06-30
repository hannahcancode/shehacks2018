import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export const GetReady = () => (
  <Fragment>
    <div>
      <p>Get Ready!</p>
    </div>
    <Button
      variant="raised"
      className="form"
      color="primary"
      component={Link}
      to="/photo"
    >
      Take my photo!
    </Button>
  </Fragment>
);
