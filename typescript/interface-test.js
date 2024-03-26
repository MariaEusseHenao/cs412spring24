//ENCAPSULATION
//GAZINTA / GAZOUTA
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mammal = /** @class */ (function () {
    function Mammal(legs) {
        if (legs === void 0) { legs = 2; }
        var _this = this;
        this.getLegs = function () { return _this.legs; };
        this.legs = legs;
    }
    Mammal.prototype.setLegs = function (legs) {
        this.legs = legs;
    };
    return Mammal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.call(this, 4) || this;
    }
    Dog.prototype.speak = function (words) { console.log("Dog says " + words); };
    return Dog;
}(Mammal));
var dog = new Dog();
console.log("Dogs have " + dog.getLegs() + " legs.");
dog.speak('Woof!');
//dog.legs = 6;
//console.log(`This particular dog has ${dog.legs} legs`);
