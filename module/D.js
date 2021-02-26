class A {
    constructor(num){
        this.num = num
    }
    add(num){
        this.num = this.num + num
    }
    sayNum(){
        console.log(this.num);
    }
}

module.exports = A