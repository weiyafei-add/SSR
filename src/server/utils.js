import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

export const render = (store, Routes, req, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.path}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const cssData = context.css || "";
  console.log(cssData);
  return `
    <html>
      <head>
      <title>ssrPage</title>
      <style>${cssData}</style>
      <script>
          window.context = { 
            state: ${JSON.stringify(store.getState())}
           }
      </script>
      </head>
      <body><div id="root">${content}</div>
      <script src='./index.js'></script>
      </body>
    </html>
    `;
};
