const players = [1,2,3,4,5]

//no
// players.forEach(async(player) => {
//     console.log('forEach');
//     await sleep(3000)
// })

//yes
async function run() {
    for (let index = 0; index < players.length; index++) {
        console.log('for');
        await sleep(3000)
    }
}
run()

function sleep(ms){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(ms)
        },ms)
    })
}