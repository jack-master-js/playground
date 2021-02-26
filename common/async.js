//async
(async()=>{
    const arr = [1,2,3,4,5]
    for (const a of arr) {
        await new Promise(resove => {
            setTimeout(()=> {
                console.log(a);
                resove()
            },1000)
        })
    }
})()

//1
// async function asyncForEach(array, callback) {
//     for (let index = 0; index < array.length; index++) {
//         await callback(array[index], index, array);
//     }
// }
// async function test() {
//     var nums = [1, 2, 3];
//     asyncForEach(nums, async x => {
//         await new Promise(resove => {
//             setTimeout(()=>{
//                 console.log(x);
//                 resove()
//             },1000)
//         })
//     })
// }

//2
// async function test() {
//     var nums = [1, 2, 3];
//     for (let x of nums) {
//         await new Promise(resove => {
//             setTimeout(() => {
//                 console.log(x);
//                 resove()
//             }, 1000)
//         })
//     }
// }

// test()