import React from "react";
import "./Success.css";

import Lottie from "react-lottie";
import * as rocket2 from "./assets/rocket.json";
export default class LottieControl extends React.Component {

  // set initial state property
  state = {isStopped: false};

  render() {

    // add button style
    const buttonStyle = {
      display: "block",
      margin: "10px auto"
    };

    const defaultOptions = {
      loop: true,
      autoplay: false,
      animationData: rocket2.default,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div>

        {/* add Lottie component */}
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isStopped={this.state.isStopped}
        />

        {/* add stop button */}
        <button
          style={buttonStyle}
          onClick={() => this.setState({isStopped: true})}
        >
          stop
        </button>

        {/* add start button */}
        <button
          style={buttonStyle}
          onClick={() => this.setState({isStopped: false})}
        >
          start
        </button>

      </div>
    );
  }
}