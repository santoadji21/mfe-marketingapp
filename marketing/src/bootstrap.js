import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

// Mount function to start up the app

const mount = (el) => {
  ReactDOM.render(
      <App/>,
      el
    
  );
};

// If we are in development mode, then we in isoltion
// call moun immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// we are running though container
// adnn we should export the mount function

export { mount };
