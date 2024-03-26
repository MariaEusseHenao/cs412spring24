//ENCAPSULATION
//GAZINTA / GAZOUTA
//TRANSPILIER
//Typescript transpiler
interface Animal {
    speak(words: string) : void
    getLegs( ) : number
} //these are required by any implementing class
//enforces a contract
class Mammal  {
    public constructor (legs = 2) {
        this.legs = legs
    }
    public setLegs(legs :number) {
        this.legs = legs
    }
    public getLegs = () => this.legs
    private legs: number
    private  eyes: number;
}
class Dog extends Mammal implements Animal  {
    public constructor () { super(4) }

    public speak (words: string)  { console.log(`Dog says ${words}`) }

}

let dog = new Dog()
console.log(`Dogs have ${dog.getLegs()} legs.`)
dog.speak('Woof!')
//dog.legs = 6;
//console.log(`This particular dog has ${dog.legs} legs`);



interface Employee  {
    firstName: string,
    lastName: string
};

const printNames = (someValue: Employee) :void => console.log(`My employee is named ${someValue.firstName} ${someValue.lastName}`)
