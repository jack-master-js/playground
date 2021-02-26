const util = require('util')
const {TextEncoder} = util
const encoder = new TextEncoder();

let obj1 = []
let obj2 = {}

console.log(util.isDeepStrictEqual(obj1,obj2));
console.log(encoder.encode('hello'));