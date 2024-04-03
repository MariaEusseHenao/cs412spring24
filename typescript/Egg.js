var EggO = /** @class */ (function () {
    function EggO(color) {
        if (color === void 0) { color = 'orange'; }
        var _this = this;
        //interface = all public functions
        this.getColor = function () { return _this.color; };
        this.setColor = function (color) { return _this.changeColor(color); };
        this.changeColor = function (color) { return _this.color = color.toUpperCase(); };
        this.color = color;
    }
    return EggO;
}());
var eggO = new EggO('red');
var egg1 = new EggO();
eggO.color = 'blue';
//eggO.setColor('orange')
//eggO.changeColor('green')
console.log("Color: ".concat(eggO.getColor()));
console.log("Color: ".concat(egg1.getColor()));
