module.exports = {
  port: 8081,
  host: "localhost",
  proxyTable: [
    {
      api: "/rest",
      target: "http://120.133.67.133:20019",
      // target: "http://122.9.140.231:20001",
    },
  ],
};
