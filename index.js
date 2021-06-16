class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((side, totalPerimeter) => {
            return totalPerimeter + side;
        })
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            let a = this.sides[0];
            let b = this.sides[1];
            let c = this.sides[2];
            if ((a + b > c) && (a + c > b) && (b + c > a)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        let firstSide = this.sides[0]
        return this.sides.every(side => side === firstSide);
    }

    get area() {
        if (this.isValid) {
            return this.sides[0] * this.sides[1];
        }
    }
}