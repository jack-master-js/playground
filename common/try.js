async function getSomething(){
    // throw Error('get something error')
    other()
}
function other(){
    throw Error('other error')
}

try {
    // console.log(getSomething());
    getSomething().catch((e) => {
        console.log(e.message)
    })
} catch (e) {
    console.log(`get error: ${e.message}`);
} 