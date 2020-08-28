import React from "react";
import ReactDOM from "react-dom";
import Articles from "./Articles";
import { BrowserRouter } from "react-router-dom";

describe("articles component", () => {
  it("articles renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Articles />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});