const express = require("express");
import { render } from "./utils";
import { getStore } from "../store/index";
import { matchRoutes } from "react-router-config";
import Routes from "../Router";
import proxy from "express-http-proxy";

const app = express();
app.use(express.static("public"));
// https://dog.ceo/api/breeds/image/random
app.use(
  "/api",
  proxy("https://dog.ceo", {
    proxyReqPathResolver: function (req) {
      return `/api${req.url}`;
    },
  })
);

app.get("*", function (req, res) {
  const store = getStore();

  // 根据路由的路径，网页面中加入数据
  const matchedRouter = matchRoutes(Routes, req.path);

  const promises = [];

  matchedRouter.map((item) => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
  });

  Promise.all(promises).then(() => {
    const context = { css: [] };
    const html = render(store, Routes, req, context);
    res.send(html);
  });
});

const server = app.listen(3300);
