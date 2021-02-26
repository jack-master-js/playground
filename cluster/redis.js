const Redis = require("ioredis");
const redis = new Redis({
    port: 6379, // Redis port
    host: "192.168.142.130", // Redis host
    password: "",
    db: 0,
  });

  module.exports = redis