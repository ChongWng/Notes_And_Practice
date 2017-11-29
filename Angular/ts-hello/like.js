"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Like = /** @class */ (function () {
    function Like(state, likesCount) {
        this.state = state;
        this.likesCount = likesCount;
    }
    Object.defineProperty(Like.prototype, "LikesCount", {
        get: function () {
            return this.likesCount;
        },
        enumerable: true,
        configurable: true
    });
    Like.prototype.onClick = function () {
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
    };
    return Like;
}());
exports.Like = Like;
