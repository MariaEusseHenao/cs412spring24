//the public method = interface for the object
var Config = /** @class */ (function () {
    function Config() {
        var _this = this;
        this.getWeight = function () {
            var localeWeight = getLocale().convert(_this.weight);
            return localeWeight;
        };
    }
    return Config;
}());
//Transpiling
var instantiate = WebAssembly.instantiate;
var Egg = /** @class */ (function () {
    function Egg(color) {
        if (color === void 0) { color = 'red'; }
        var _this = this;
        this.getColor = function () { return _this.color; };
        this.setColor = function (color) { return _this.color = color; };
        this._setWeight = function (weight) { _this.weight = weight; }; //private instantiation
        this.setWeight = function (config) {
            _this._setWeight = config.getWeight();
            return 5;
        };
        this.color = color;
    }
    Egg.carton = 12;
    Egg.getCarton = function () { return Egg.carton; };
    //    egg.setYolk({weight: 5, color: 'yellow'})
    Egg.instantiateCarton = function () {
        if (Egg.instance)
            return Egg.instance;
        else {
            Egg.instance = new Egg();
            return Egg.instance;
        }
    };
    return Egg;
}());
console.log("Cartons hold ".concat(Egg.carton, " eggs"));
console.log("Cartons hold ".concat(Egg.getCarton(), " eggs"));
//let egg<Egg> = Egg.instantiateCarton();
var egg = new Egg();
egg.setColor('orange');
//egg.setWeight({weight: 5, color: 'yellow'})
console.log("Egg color: ".concat(egg.getColor()));
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
