// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return Math.PI * this.diameter;
  }

  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  set area(area) {
    this.radius = Math.sqrt(area / Math.PI);
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  set circumference(circumference) {
    this.radius = circumference / (Math.PI * 2);
  }
}

const myCircle = new Circle(10);
console.log(myCircle.diameter); // 20
console.log(myCircle.circumference); // 62.83 
console.log(myCircle.area); // 314.16

myCircle.diameter = 14;
console.log(myCircle.radius); // 7