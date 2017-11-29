//---------------------
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finanlly:' + i);
}
doSomething();
//-------------------------
var a;
var b;
var c;
var d;
var e = [1, 2, 2];
var f = [true, 'Hello', 2];
var ColorRed = 0;
var ColorBlue = 1;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
//better to set the value for each color explicitly
var bgColor = Color.Blue;
//------------------
//Type assertion
var message;
message = 'Hello World';
var endsWithD = message.endsWith('d');
var alternativeWay = message.endsWith('d');
var log = function (message) {
    console.log(message);
}; //way in JS
//arrow function or lambda expression in C# and Java
var doLog = function (message) { return console.log(message); };
var doLog2 = function (message) { return console.log(message); };
var doLog3 = function () { return console.log(); };
//----------------------------
//inline annotation
var drawPoint = function (point) {
    //...
};
drawPoint({
    x: 1,
    y: 2
});
var alternativeDrawPoint = function (point) {
    //...
};
//--------------------------------------
//introduction of class
var PointNote = /** @class */ (function () {
    //typescript doesn't support multi-constructors
    //question mark stands for optional value
    //if x is optional, then other values right to x should be optional as well
    function PointNote(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(PointNote.prototype, "x", {
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
    PointNote.prototype.draw = function () {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    };
    PointNote.prototype.getDistance = function (anotherPoint) {
        //...
    };
    return PointNote;
}());
var point = new PointNote();
point.draw();
var newPoint = new PointNote(2, 4);
var x = newPoint.x;
point.x = 20;
