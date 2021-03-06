import React from "react";
import ReactDOM from "react-dom";
import Landing from "./Landing";
import { BrowserRouter } from "react-router-dom";

describe("landing component", () => {
  it("landing renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});