import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider, stylesProvider } from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default function App() {
  return (
    <StylesProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/pricing" component={Pricing} />
          <Route path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
}
