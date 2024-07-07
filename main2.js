var Point = /** @class */ (function () {
    // x: number;
    // y: number;
    // constructor ( x?: number, y?: number) {
    //     this.x = x!;
    //     this.y = y!;
    // }
    function Point(x, y) {
        this.x = x;
        this.y = y;
        // this.x = x!;
        // this.y = y!;
    }
    Point.prototype.sum = function () {
        console.log('Sum of X and Y is ', this.x + this.y);
    };
    return Point;
}());
var point = new Point(1, 2);
// point.x = 10;
// point.y = 29;
// point.sum();


function Hello(){
    var x = "Hello";
    var y = 10;
    var result = x + y; 
    console.log(result);
}

Hello();