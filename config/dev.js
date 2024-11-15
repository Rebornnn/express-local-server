const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");
const connectHistoryApiFallback = require("connect-history-api-fallback");
const { port, proxyTable = [], contextPath } = require("../index.js");

const app = express();
app.use(cors());
app.use(`${contextPath}`, connectHistoryApiFallback());
app.use(`${contextPath}`, express.static("./static/iam")); // 设置静态资源访问路径
app.use(`${contextPath}/static/iam`, express.static("./static/iam")); // 设置静态资源访问路径
app.use(`${contextPath}/static/apm`, express.static("./static/apm"));
app.use(`${contextPath}/static/analysis`, express.static("./static/analysis"));
app.use(`${contextPath}/static/rum`, express.static("./static/rum"));
app.use(`${contextPath}/static/alert`, express.static("./static/alert"));
app.use(`${contextPath}/static/test`, express.static("./static/test"));
// app.use("/static/bonree-design", express.static("./static/bonree-design"));
// app.use("/static/bonree-design-plus", express.static("./static/bonree-design-plus"));
proxyTable.forEach((item) =>
  app.use(
    createProxyMiddleware(item.api, {
      target: item.target, // 目标服务器 host
      changeOrigin: true, // // 默认false，是否需要改变原始主机头为目标URL
      ws: true, // 是否代理websockets
      pathRewrite: (path) => {
        return path.replace(contextPath, "");
      }, // 重写路径
    })
  )
);

app.listen(port, () => {
  console.log(`listen：${port}`);
});
