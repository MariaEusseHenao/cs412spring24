
//the public method = interface for the object
class Config {
    private weight: number;
    private color: string;
    public getWeight  = () : number => {
        let localeWeight = getLocale().convert(this.weight);
        return localeWeight;
    }
}

//Transpiling

import instantiate = WebAssembly.instantiate;

class Egg {
//    public Egg(); //C++  style constructor with the name of the class
    private color :string
    private weight : number;
    private static instance :Egg;
    public static carton :number = 12
    public static getCarton = () => Egg.carton
    public getColor  = (): String => this.color
    public setColor = (color) => this.color = color
    public constructor (color = 'red') {
        this.color = color
    }
    private _setWeight = (weight: number) => { this.weight = weight;} //private instantiation
    public setWeight = (config: Config) : number =>  { //public interface
        this._setWeight = config.getWeight();
        return 5;
}
//    egg.setYolk({weight: 5, color: 'yellow'})

    static instantiateCarton = () :object => {
        if (Egg.instance) return Egg.instance
        else {
            Egg.instance = new Egg();
            return <Egg>Egg.instance
        }
    }

}

console.log(`Cartons hold ${Egg.carton} eggs`)
console.log(`Cartons hold ${Egg.getCarton()} eggs`)
//let egg<Egg> = Egg.instantiateCarton();

let egg = new Egg()
egg.setColor('orange')
//egg.setWeight({weight: 5, color: 'yellow'})
console.log(`Egg color: ${egg.getColor()}`)



//console.log(`Color: ${Egg.color}`)

// let a :string = 12345
// console.log(`${a.trim()}`)


// interface Animal {
//     speak =  () => console.log(`Hello`);
// }

// this works fine in JS, not in TS
// var foo = {
//     baz: 5;
// };
//
// foo.bazeeble = 6;
// foo.add = () => 5;
