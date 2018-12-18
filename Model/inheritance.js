
'use strict';
// private variables
const length = new WeakMap();
const width = new WeakMap();
class Rectangle{

    constructor(len,wid){
        length.set(this,len);
        width.set(this,wid);
    }

    area(){
        return length.get(this) * width.get(this);
    }

} 

class square extends Rectangle {
    constructor(l,w){
        super(l,w);
    }

    perimeter(){
        return super.area() + 2; 
    }
}
module.exports = square;
