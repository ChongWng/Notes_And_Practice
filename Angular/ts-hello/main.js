//---------------------
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finanlly:' + i);
}
doSomething();
//-------------------------
let a;
let b;
let c;
let d;
let e = [1, 2, 2];
let f = [true, 'Hello', 2];
const ColorRed = 0;
const ColorBlue = 1;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
//better to set the value for each color explicitly
let bgColor = Color.Blue;
//------------------
//Type assertion
let message;
message = 'Hello World';
let endsWithD = message.endsWith('d');
let alternativeWay = message.endsWith('d');
let log = function (message) {
    console.log(message);
}; //way in JS
//arrow function or lambda expression in C# and Java
let doLog = (message) => console.log(message);
let doLog2 = message => console.log(message);
let doLog3 = () => console.log();
//----------------------------
//inline annotation
let drawPoint = (point) => {
    //...
};
drawPoint({
    x: 1,
    y: 2
});
let alternativeDrawPoint = (point) => {
    //...
};
drawPoint({
    x: 1,
    y: 2
});
//--------------------------------------
//introduction of class
class Point {
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    getDistance(anotherPoint) {
        //...
    }
}
let point = new Point();
point.x = 1;
point.y = 2;
point.draw();
