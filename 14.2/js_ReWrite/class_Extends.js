class ShapeT {
  tlaotT;
  kodkodimT;
  widthT;
  heightT;
  constructor(tlaotT, kodkodimT, widthT, heightT) {
    this.tlaotT = tlaotT;
    this.kodkodimT = kodkodimT;
    this.widthT = widthT;
    this.heightT = heightT;
  }
}

//when extending a class, you must use all the properties of the class you are extending
class RectT extends ShapeT {
  constructor(widthT, heightT) {
    super(4, 4, widthT, heightT);
  }
  calc_AreaT() {
    return this.widthT * this.heightT;
  }
  calc_PerimeterT() {
    return (this.widthT + this.heightT) * 2;
  }
}

let shapeT = new ShapeT(70, 70, 50, 120);
let rectT = new RectT(50, 50);

console.log({
  shapeT,
  rectT,
});

class Point_2DT {
  #meT; //private property
  xT;
  yT;
  constructor(xT, yT) {
    this.xT = xT;
    this.yT = yT;
    this.#meT = "cm";
  }
}

class Point_3DT extends Point_2DT {
  zT;
  constructor(xT, yT, zT) {
    super(xT, yT);
    this.zT = zT;
    // this.#me = "km"; //! error
  }
}

class LineT {
  point1T;
  point2T;
  constructor(point1T, point2T) {
    this.point1T = point1T;
    this.point2T = point2T;
  }
}
let lineT = new LineT(new Point_2DT(0, 0), new Point_2DT(0, 5));
