class Paint{

    // x: number;
    // y: number;

    // constructor ( x?: number, y?: number) {
    //     this.x = x!;
    //     this.y = y!;
    // }

    constructor (public x?: number, public y?: number) {    }

    sum() {
        console.log('Sum of X and Y is ', this.x! + this.y!);
    }
}
// let point = new Point(1,2);
// point.x = 10;
// point.y = 29;
// point.sum();



