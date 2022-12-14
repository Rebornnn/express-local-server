module.exports = {
  port: 8081,
  host: "localhost",
  proxyTable: [
    {
      api: "/rest",
      // 邹海涛IP
      // target: 'http://192.168.1.97:8082',
      // 杨伟康IP
      // target: 'http://192.168.1.20:8082',
      // 陆文飞IP
      // target: 'http://192.168.1.205:8082',
      // 非SSO
      target: 'http://10.241.110.35:5555',
      // 邹海涛外网ip
      // target: "http://223.76.185.147:9797",
    },
  ],
};
