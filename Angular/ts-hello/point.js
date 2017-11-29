"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        //Property
        set: function (value) {
            if (value < 0) {
                throw new Error('The value cannot be less than 0.');
            }
            else
                this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.draw = function () {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    };
    Point.prototype.getDistance = function (anotherPoint) {
        //...
    };
    return Point;
}());
exports.Point = Point;
