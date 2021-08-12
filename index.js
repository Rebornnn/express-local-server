module.exports = {
  port: 8081,
  host: "localhost",
  proxyTable: [
    {
      api: "/rest",
      target: "http://122.9.140.231:20001",
    },
  ],
};
