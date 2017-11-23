/* function doSomething(){
    for(var i=0;i<5;i++){
        console.log(i);
    }
    console.log('Finanlly:'+i);
}
doSomething(); */
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
var bgColor = Color.Blue;
