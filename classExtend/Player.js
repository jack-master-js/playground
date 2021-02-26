class Player {
    constructor (loginName, age) {
        this.loginName = loginName
        this._age = age
        this.ctx = null
        this.other = 'hi'
    }

    say() {
        console.log(`my loginName is ${this.loginName}, age is ${this.age}`);
    }

    get age () {
        console.log(`you get age ${this._age}`);
        return this._age
    }

    set age (value) {
        this._age = value
        console.log(`set age to ${value}`);
    }

    res(ctx) {
        this.ctx = ctx
    }
}

module.exports = Player