export class Point{
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
    