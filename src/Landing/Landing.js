import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div id='landing-box'>
        <p>&emsp;
          &emsp;Laissez.fit is an idea inspired by many others. It is a fusion
          of Laissez-faire economics, which is the idea that the economy takes
          care of itself. It is also the idea that we as people are lazier than
          we have ever been. With so much done for us, we are busy with "Lazy"
          activities.
          <br />
          <br />
          &emsp;
          &emsp;This is a great thing, but it can sometimes put our health at risk.
          This is where Laissez.fit comes in. Read about lazy fitness in the
          articles and where ever else you can find it. Track your fitness goals
          to discover where you stand each day. Monitor your metrics to see that
          you are in the shape you want to be in. Do it the Laissez way.
        </p>
      </div>
    );
  }
}
