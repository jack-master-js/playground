const timerCache = new Map()

timerCache.set('a',setTimeout)

let aTimer = timerCache.set()