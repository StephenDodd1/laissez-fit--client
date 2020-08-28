import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";
import { BrowserRouter } from "react-router-dom";

describe("comment component", () => {
  it("comment renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Comment />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});