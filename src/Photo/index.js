import React, { Component } from "react";
import Webcam from "react-webcam";
import YouLookGreat from "../assets/youlookfantastic.png";
import style from "./index.css";

export class Photo extends Component {
  constructor() {
    super();
    this.state = { currentCount: 0 };
  }

  componentDidMount() {
    const intervalId = setInterval(this.runTimer, 2000);
  }

  runTimer = () => {
    if (this.state.currentCount < 6) {
      this.setState({ currentCount: this.state.currentCount + 1 });
    } else {
      clearInterval(this.intervalId);
    }
  };

  render() {
    return (
      console.log(this.state.currentCount) ||
      (this.state.currentCount < 5 ? (
        <Webcam
          className="video"
          width={375}
          height={667}
          videoContraints={{ height: 667, width: 375 }}
        />
      ) : (
        <div className="background" />
      ))
    );
  }
}
