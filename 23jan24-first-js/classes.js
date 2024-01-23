class Animal {
    constructor(name) { this.name = name}
    speak() { console.log(this.name, " speaks (parent)")}
}
exports.Dog = class Dog extends Animal {
    constructor(name, breed) {
        super(name)
        this.breed = breed}
}
//let moo = new Dog("Maggie", "Lab")
exports.x = 1
exports.y = 2
//console.log(moo.name)
//console.log(moo.breed)
//moo.speak()
