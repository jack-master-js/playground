let timeCache = new Map()

timeCache.set('a',{
    totalTime: 100,
    roundTime:0
})

console.log('start',timeCache);

for (let index = 0; index < 10; index++) {
    let time = timeCache.get('a')
    time.totalTime ++
    time.roundTime ++ 

    console.log(timeCache);

    // timeCache.set('a',time)
}

console.log('final',timeCache.get('a'));
