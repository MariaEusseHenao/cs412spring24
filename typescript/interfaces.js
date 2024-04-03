var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//enforces a contract
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
    Dog.prototype.speak = function (words) { console.log("Dog says ".concat(words)); };
    return Dog;
}(Mammal));
var dog = new Dog();
console.log("Dogs have ".concat(dog.getLegs(), " legs."));
dog.speak('Woof!');
;
var printNames = function (someValue) { return console.log("My employee is named ".concat(someValue.firstName, " ").concat(someValue.lastName)); };
