class Point2D {
  //vars in the start of the class are for comments
  x; //(x, y)
  y; //(x, y)
  constructor(x_From_Outside, y_From_Outside) {
    this.x = x_From_Outside;
    this.y = y_From_Outside;
  }
}

let point3 = new Point2D(50, 50);
let point4 = new Point2D(100, 50);

// let point1 = {
//   x: 50,
//   y: 50
// };
// let point2 = {
//   x: 100,
//   y: 50
// };
//-----------------------------------------------------

class Animals {
  legs;
  head;
  tail;
  eyes;
  constructor(legs, head, tail, eyes = 2) {
    this.legs = legs;
    this.head = head;
    this.tail = tail;
    this.eyes = eyes;
  }
}
let dog = new Animals(4, 1, 1, 2);
let cat = new Animals(4, 1, 1, 2);
let spider = new Animals(8, 1, 0, 'many');
console.log(dog);

// let dog = {
//   legs: 4,
//   head: 1,
//   tail: 1,
//   eyes: 2
// }
// let cat = {
//   legs: 4,
//   head: 1,
//   eyes: 2,
//   teil: 1
// }
const print_Animal = ({
  legs,
  head,
  tail,
  eyes
}) => {
  console.log("legs:", legs);
  console.log("head:", head);
  console.log("tail:", tail);
  console.log("eyes:", eyes);
}
print_Animal(dog);
print_Animal(cat);
//-----------------------------------------------------
class Picture {
  width;
  height;
  url;
  constructor(width, height, url) {
    this.width = width;
    this.height = height;
    this.url = url;
  }
  print_Img_Url() {
    console.log(this.url);
  }
}
let mona_Lisa = new Picture(500, 500, "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg/687px-Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg");
mona_Lisa.print_Img_Url();

//-----------------------------------------------------
//static in class
class console_Css {
  static log(string, style) {
    console.log("%c" + string, style);
  }
}
console_Css.log("Stop!", "color: red; font-size: 3em;");

class sorting {
  static sort(arr, asc) {
    // arr.sort((a, b) => a - b);
    let new_Arr = [...arr];
    if (asc) {
      new_Arr.sort((a, b) => a - b);
    } else {
      new_Arr.sort((a, b) => b - a);
    }
    return new_Arr;
  }
}

let log_Arr = sorting.sort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], false);
console.log(log_Arr);

class calc {
  static calculate(num1, num2, op) {
    switch (op) {
      case a:
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2
        // case '+':
      default:
        return num1 + num2;
    }
  }
}
let calc_Result = calc.calculate(10, 5, '*');
console.log(calc_Result);