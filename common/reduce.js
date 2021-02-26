let arr0 = [1,1,3,4,5,6,3,2]
let arr1 = [
    {name: 'paddy0',age: 0},
    {name: 'paddy1',age: 1},
    {name: 'paddy2',age: 2},
    {name: 'paddy3',age: 3},
]

let result0 = arr0.reduce((result,value) => {
    if(!result.includes(value)) result.push(value)
    return result
}, [])

let result1 = arr1.reduce((result,value) => {
    result[value.name] = value.age
    return result
}, {})

let result2 = arr0.filter((item,index) => {
    return arr0.indexOf(item) === index
})

let result3 = {}
arr1.forEach((item) => {
    result3[item.name] = item.age
})

console.log(result0);
console.log(result1);
console.log(result2);
console.log(result3);