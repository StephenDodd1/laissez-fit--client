import React from "react";
import ReactDOM from "react-dom";
import Tracking from "./Tracking";
import { BrowserRouter } from "react-router-dom";
import tracking from "./Testing/Tracking.json";

describe("tracking component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Tracking tracking={tracking} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
