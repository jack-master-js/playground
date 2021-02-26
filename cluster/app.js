const express = require('express')
const app = express()
const port = 3000
const childProcess = require('child_process')
// const redis = require('./redis')

const agent = childProcess.fork('./agent.js')
agent.send('hi agent from app')
agent.on('message', (msg) => {
    console.log(`app receive ${msg}`)
})

process.send('hi master from app')
process.on('message', (msg) => {
    console.log(`master app receive ${msg}`)
})

app.use(require('cors')())

app.get('/', async(req, res) => {
    console.log(process.pid);
    
    // let num = await redis.get('num')
    // let n = Number(num)
    // n ++
    // await redis.set('num', String(n))
    // let curnum = await redis.get('num')
    // res.send(curnum)
    res.send({msg: 'hi'})
})

app.listen(port, () => console.log(`master ${process.pid} app listening on port ${port}!`))