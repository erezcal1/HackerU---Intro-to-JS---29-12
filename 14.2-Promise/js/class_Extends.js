class Shape {
  tlaot;
  kodkodim;
  width;
  height;
  constructor(tlaot, kodkodim, width, height) {
    this.tlaot = tlaot;
    this.kodkodim = kodkodim;
    this.width = width;
    this.height = height;
  }
}

//when extending a class, you must use all the properties of the class you are extending
class Rect extends Shape {
  constructor(width, height) {
    super(4, 4, width, height);
  }
  calc_Area() {
    return this.width * this.height;
  }
  calc_Perimeter() {
    return (this.width + this.height) * 2;
  }
}

let shape = new Shape(70, 70, 50, 120);
let rect = new Rect(50, 50);

console.log({
  shape,
  rect,
});

class Point_2D {
  #me; //private property
  x;
  y;
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.#me = "cm";
  }
}

class Point_3D extends Point_2D {
  z;
  constructor(x, y, z) {
    super(x, y);
    this.z = z;
    // this.#me = "km"; //! error
  }
}

class Line {
  point1;
  point2;
  constructor(point1, point2) {
    this.point1 = point1;
    this.point2 = point2;
  }
}
let line = new Line(new Point_2D(0, 0), new Point_2D(0, 5));
