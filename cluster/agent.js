console.log(`agent ${process.pid} started`);
process.send('hi app from agent')
process.on('message', (msg) => {
    console.log(`agent receive ${msg}`);
})