module.exports = {
    a:() => {
        console.log('a');
    },
    b:() => {
        this.a()
    },
}