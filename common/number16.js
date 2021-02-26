let num = 255
let num16 = 0XFF

// console.log(num === num16);
// console.log(`0X${num.toString(16).toUpperCase()}`);  //0XFF === 255  (十六进制可以保证255以内的数字4位)  0X100 === 256

// let arr = []
// for (let index = 0; index < 256; index++) {
//     let code = `${index.toString(16).toUpperCase()}`
//     if(code.length === 1) {
//         code = '0X0' + code
//     }else{
//         code = '0X' + code
//     }
//     arr.push(code)
// }
// console.log(arr);

console.log(0X100);