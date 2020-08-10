import React, { Component } from "react";

export default class Tracking extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const today = new Date();
    return (
      <div id="tracking-container">
        <div id="date-container">
          <h2>{`${today.getMonth()}/${today.getDate()}/${today.getFullYear()}`}</h2>
        </div>
        <div id='tracking-metrics'>
          <div id="fitness-container">
            <h3>Fitness </h3>
            <ul>
              <li>Activity 1</li>
              <li>Activity 2</li>
              <li>Activity 3</li>
              <li>Activity 4</li>
              <li>Activity 5</li>
            </ul>
          </div>
          <div id='nutrition-container'>
            <h3>Nutrition</h3>
            <ul>
              <li>Calories 1</li>
              <li>Calories 2</li>
              <li>Calories 3</li>
              <li>Calories 4</li>
              <li>Calories 5</li>
            </ul>
          </div>
          <div>
            <h3>Stats</h3>
            <ul>
              <li>Metric 1</li>
              <li>Metric 2</li>
              <li>Metric 3</li>
              <li>Metric 4</li>
              <li>Metric 5</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
