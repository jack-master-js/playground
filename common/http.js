const https = require('https')

https.get('https://httpbin.org/get', (res) => {

    let rawData = ''
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        try {
        const parsedData = JSON.parse(rawData);
        console.log(parsedData);
        } catch (e) {
        console.error(e.message);
        }
    });

})