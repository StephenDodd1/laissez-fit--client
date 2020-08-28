import React from "react";
import ReactDOM from "react-dom";
import Track from "./Track";
import { BrowserRouter } from "react-router-dom";

describe("track component", () => {
  it("track renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Track />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});