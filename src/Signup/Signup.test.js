import React from "react";
import ReactDOM from "react-dom";
import Signup from "./Signup";
import { BrowserRouter } from "react-router-dom";

describe("tracking component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Signup  />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});