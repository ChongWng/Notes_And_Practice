
//---------------------
function doSomething(){
    for(var i=0;i<5;i++){
        console.log(i);
    }
    console.log('Finanlly:'+i);
}
doSomething(); 

//-------------------------

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 2];
let f: any[] = [true, 'Hello', 2];

const ColorRed = 0;
const ColorBlue = 1;

enum Color { Red = 0, Blue = 1, Green = 2};
//better to set the value for each color explicitly
let bgColor = Color.Blue;

//------------------
//Type assertion
let message;
message = 'Hello World';
let endsWithD = (<string>message).endsWith('d');
let alternativeWay = (message as string).endsWith('d');


let log = function(message){
    console.log(message);
} //way in JS
//arrow function or lambda expression in C# and Java
let doLog = (message) => console.log(message);
let doLog2 = message => console.log(message);
let doLog3 = () => console.log();

//----------------------------
//inline annotation
let drawPoint = (point: {x: number, y: number}) => {
    //...
}

drawPoint({
    x: 1,
    y: 2
})

//interface, reusable
interface Point{
    a: number,
    b: number
}
let alternativeDrawPoint = (point: Point) => {
    //...
}



//--------------------------------------
//introduction of class

class PointNote{

    //typescript doesn't support multi-constructors
    //question mark stands for optional value
    //if x is optional, then other values right to x should be optional as well
    constructor(private _x?: number,  private _y?: number){
    }

    //Property
    set x(value){
        if(value<0){
            throw new Error('The value cannot be less than 0.');
        }
        else this._x = value;
    }

    get x(){
        return this._x;
    }
    draw(){
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }

    getDistance(anotherPoint: Point){
        //...
    }
}

let point = new PointNote();
point.draw();
let newPoint = new PointNote(2, 4);
let x = newPoint.x;
point.x = 20;