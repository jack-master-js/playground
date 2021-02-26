const Player = require('./Player')

class TestPlayer extends Player {
    constructor (name, ...args) {
        super()
        this.name = name
    }

    say() {
        console.log(`my name is ${this.name}, loginName is ${this.loginName}, age is ${this.age} other is ${this.other} another ${this.another}`);
    }

    call() {
        super.res(1)
    }
}

module.exports = TestPlayer