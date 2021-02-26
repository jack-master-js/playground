const cluster = require('cluster')
const childProcess = require('child_process')
// const redis = require('./redis')

if (cluster.isMaster) {
    console.log(`Master ${process.pid} started`);
    // redis.set('num', '0')

    for (let i = 0; i < require('os').cpus().length; i++) {
        const worker = cluster.fork();
        worker.send(`hi worker#${worker.id} from master`);
        worker.on('message', (msg) => {
            console.log(`master receive ${msg}`)
        })
    }

    const app = childProcess.fork('./app.js')
    app.send('hi app from master')
    app.on('message', (msg) => {
        console.log(`master receive ${msg}`)
    })
} else {
    console.log(`Worker ${process.pid} started`);

    process.send('hi master from worker')
    process.on('message', (msg) => {
        console.log(`worker ${process.pid} receive ${msg}`);
    });
}