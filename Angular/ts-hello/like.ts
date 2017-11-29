export class Like{
    constructor(private state: boolean, private likesCount: number){
    }

    get LikesCount(){
        return this.likesCount;
    }

    onClick(){
        // if(this.state) {
        //     this.state = false;
        //     this.likesCount --;
        // }
        // else {
        //     this.state = false;
        //     this.likesCount ++;
        // }
        this.state != this.state;
        this.likesCount += (this.state) ? -1 : 1;
    }


}