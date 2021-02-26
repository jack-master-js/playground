function genTime(s){
    if(s < 60) return s + '秒'
    if(s < 60 * 60) return Math.floor(s/60) + '分钟'
    if(s < 60 * 60 * 60) return Math.floor(s/(60*60)) + '小时'
}

console.log(genTime(2*60*60*60));