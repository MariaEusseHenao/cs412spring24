//const animal = require('./classes')
// const dog = require('./classes').Dog
// console.log(dog.x)
// console.log(dog.y)
// let mags = new dog('mags','lab')
// mags.speak()
// let pickles = new dog('pickles')
// pickles.speak()

class food  {
    constructor(size) {
        let _that = this;
         this.size = size
    }
     getSize () { return this.size}
}
class egg extends food {
    constructor(color, size) {
        super(size)
         this.color = color
    }
    getColor() { return this.color}
    setColor(color) { this.color = color }
}

let myFood = new food(4.0)
let myOtherFood = new food(3.0)
let myEgg = new egg("blue", 5)
console.log("Size: ", myFood.getSize())
console.log("Color: ", myEgg.getColor())
console.log(`Egg color direct: ${myEgg.color}`);


