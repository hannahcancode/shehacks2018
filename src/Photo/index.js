import React, { Component } from "react";
import Webcam from "react-webcam";

export class Photo extends Component {
  render() {
    return (
      <Webcam
        width={375}
        height={667}
        videoContraints={{ height: 667, width: 375 }}
      />
    );
  }
}
