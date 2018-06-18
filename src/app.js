import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import "./styles/styles.scss";
import "normalize.css/normalize.css";

ReactDOM.render(
  <IndecisionApp options={[{ text: "2" }, { text: "1" }, { text: "Magic" }]} />,
  document.getElementById("app")
);
