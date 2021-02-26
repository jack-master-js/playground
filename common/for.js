let obj = {
    name: 'paddy',
    age: 3
}

let arr = ['a','b','c']

let map = new Map()
map.set('a', 'paddy')
map.set('b', 'patrick')

// for (const key in obj) {
//     console.log(key);
// }

for (const item of arr) {
    console.log(item);
}

// for (const [key,value] of map) {
//     console.log(`${key} -> ${value}`);
// }