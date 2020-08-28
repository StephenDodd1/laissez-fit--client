import React from "react";
import ReactDOM from "react-dom";
import Article from "./Article";
import { BrowserRouter } from "react-router-dom";

describe("article component", () => {
  it("article renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Article />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});