"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var like_1 = require("./like");
var point = new point_1.Point(2, 3);
point.draw();
var component = new like_1.Like(true, 10);
component.onClick();
console.log('Likes: ' + component.LikesCount);
