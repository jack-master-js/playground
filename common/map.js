let cache = new Map()
let obj = {a: '1',b: '2'}

cache.set(1001,23423523523)
cache.set(1,{name:'paddy'})

console.log(Object.values(obj));

let cacheIter = cache.values()
console.log(cacheIter);
// console.log(cacheIter.next().value);
// console.log(cacheIter.next().value);

let caches = Array.from(cacheIter)
console.log(caches);
// caches[0] = '00000'
// caches[1]['name'] = 'padd'
// console.log(cache);
// console.log(caches);