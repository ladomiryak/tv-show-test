import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

const render = (Component) => {
  const renderEl = <Component />;

  ReactDOM.render(renderEl, document.getElementById("root"));
};

render(App);
