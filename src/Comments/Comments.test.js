import React from "react";
import ReactDOM from "react-dom";
import Comments from "./Comments";
import { BrowserRouter } from "react-router-dom";

describe("comments component", () => {
  it("comments renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Comments />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});