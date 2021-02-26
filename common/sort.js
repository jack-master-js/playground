let objArr = [
    {index: 0, vip: 3, num: 9},
    {index: 1, vip: 1, num: 2},
    {index: 2, vip: 6, num: 1},
    {index: 3, vip: 8, num: 9},
]

objArr.sort((front, back) => {
    return back.vip - front.vip
})

objArr.sort((front, back) => {
    return back.num - front.num
})

console.log(objArr);

let i = objArr.findIndex((value, index) => {
    console.log(value);
    return value.vip === 11
})
console.log(i);