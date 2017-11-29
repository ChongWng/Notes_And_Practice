import { Point } from './point';
import { Like } from './like';

let point = new Point(2, 3);
point.draw();

let component = new Like(true, 10);
component.onClick();
console.log('Likes: ' + component.LikesCount);
