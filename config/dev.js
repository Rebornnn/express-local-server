const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");
const connectHistoryApiFallback = require("connect-history-api-fallback");
const { port = 8080, proxyTable = [] } = require("../index.js");

const app = express();
app.use(cors())
app.use("/", connectHistoryApiFallback());
app.use("/", express.static("./public")); // 设置静态资源访问路径
proxyTable.forEach((item) =>
  app.use(
    createProxyMiddleware(item.api, {
      target: item.target, // 目标服务器 host
      changeOrigin: true, // // 默认false，是否需要改变原始主机头为目标URL
      ws: true, // 是否代理websockets
    })
  )
);

app.listen(port, () => {
  console.log(`listen：${port}`);
});
