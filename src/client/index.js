import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "../Router";
import { Provider } from "react-redux";
import { getClientStore } from "../store/index";
import { renderRoutes } from "react-router-config";

const store = getClientStore();
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.hydrate(<App />, document.getElementById("root"));
