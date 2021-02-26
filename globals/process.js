console.log(process.pid);
console.log(process.ppid);
console.log(process.execArgv);
console.log(process.uptime());

process.on('beforeExit', () => {
    console.log('beforeExit');
})

process.on('exit', () => {
    console.log('exit');
})

process.exit()