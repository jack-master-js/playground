const fs = require('fs')

const buf = fs.readFileSync('./data.json')
console.log(JSON.parse(buf.toString()))

// fs.writeFile('write.txt', 'hello fs', (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// })

// fs.unlink('write.txt', (err) => {
//     if (err) throw err;
//     console.log('file was deleted');
// })