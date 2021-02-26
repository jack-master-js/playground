console.time('A');
console.log(__filename);
console.log(__dirname);

console.log('1');

setImmediate(() => {
    console.log('setImmediate');
})
setTimeout(() => {
    console.log('setTimeout');
},0)
process.nextTick(() => {
    console.log('nextTick');
})

console.log('2');
console.timeEnd('A')

