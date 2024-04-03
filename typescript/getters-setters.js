//why no arrow function on _setColor?
var Egg0 = /** @class */ (function () {
    function Egg0(color) {
        var _this = this;
        this._setColor = function (color) {
            _this.color = color;
        };
        this.color = color;
    }
    Egg0.prototype.getColor = function () {
        return this.color;
    };
    Egg0.prototype.setColor = function (color) {
        this._setColor(color);
        //        this.color = color;
        return this.color;
    };
    return Egg0;
}());
var egg = new Egg0('blue');
var foo = 2;
