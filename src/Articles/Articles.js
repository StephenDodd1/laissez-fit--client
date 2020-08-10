import React, { Component } from "react";

export default class Article extends Component {
  render() {
    return (
      <div id="articles-container">
        <div>
          <h3>Fitness</h3>
          <ul>
            <li>Article 1</li>
            <li>Article 2</li>
            <li>Article 3</li>
            <li>Article 4</li>
            <li>Article 5</li>
          </ul>
        </div>
        <div>
          <h3>Nutrition</h3>
          <ul>
            <li>Article 1</li>
            <li>Article 2</li>
            <li>Article 3</li>
            <li>Article 4</li>
            <li>Article 5</li>
          </ul>
        </div>
        <div>
          <h3>Measures of Health</h3>
          <ul>
            <li>Article 1</li>
            <li>Article 2</li>
            <li>Article 3</li>
            <li>Article 4</li>
            <li>Article 5</li>
          </ul>
        </div>
      </div>
    );
  }
}
