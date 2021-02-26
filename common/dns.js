const dns = require('dns');

dns.resolve4('baidu.com', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});