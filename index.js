// 上下文路径
const contextPath = '';

module.exports = {
  port: 8080,
  // host: "localhost",
  host: "http://192.168.1.156",
  proxyTable: [
    {
      api: `${contextPath}/rest`,
      // 邹海涛IP
      // target: 'http://192.168.1.97:8082',
      // 杨伟康IP
      // target: 'http://192.168.1.20:8082',
      // 陆文飞IP
      // target: 'http://192.168.1.205:8082',
      // 陈强
      // target: 'http://192.168.1.232:8081',
      // 测试
      // target: 'http://10.241.110.11:9102',
      target: "http://10.241.110.13:58899",
      // 邹海涛外网ip
      // target: "http://223.76.185.147:9797",
    },
    {
      api: `${contextPath}/open`,
      // 邹海涛IP
      // target: 'http://192.168.1.97:8082',
      // 杨伟康IP
      // target: 'http://192.168.1.20:8082',
      // 陆文飞IP
      // target: 'http://192.168.1.205:8082',
      // 陈强
      // target: 'http://192.168.1.232:8081',
      // 测试
      // target: 'http://10.241.110.11:9102',
      target: "http://10.241.110.13:58899",
      // 邹海涛外网ip
      // target: "http://223.76.185.147:9797",
    },
  ],
  contextPath
};
