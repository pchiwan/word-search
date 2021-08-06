import React from "react";
import ReactDOM from "react-dom";

import { InputType } from "./types";
import App from "./App";

const inputs: InputType[] = require("./inputs.json");

ReactDOM.render(
  <React.StrictMode>
    <App games={inputs} />
  </React.StrictMode>,
  document.getElementById("root")
);
