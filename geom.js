  //Rectangles
  class Rectangle {
    constructor(length, width) {
      this.length = length;
      this.width = width;
    }
    isSquare(){
      if (this.length == this.width){
        return true;
      } else {
        return false;
      }
    }
    area(){
      return this.length*this.width;
    }
    perimeter(){
      return 2*(this.length + this.width);
    }
  }

  let rec1 = new Rectangle(60, 90);
  let rec2 = new Rectangle(60, 60);
  let rec3 = new Rectangle(60, 45);

  //Triangles
  class Triangle {
    constructor(sideA, sideB, sideC){
      this.sideA = sideA;
      this.sideB = sideB;
      this.sideC = sideC;
      this.semiperimeter();
    }
    isEquilateral(){
      if ( (this.sideA == this.sideB) && (this.sideC == this.sideB) ){
        return true;
      } else {
        return false;
      }
    }
    isIsosceles(){
      if ( ( (this.sideA == this.sideB) && (this.sideC !== this.sideB) ) || ( (this.sideA == this.sideC) && (this.sideC !== this.sideB) ) || ( (this.sideC == this.sideB) && (this.sideA !== this.sideB) ) ){
        return true;
      } else {
        return false;
      }
    }
    semiperimeter(sideA, sideB, sideC) {
      this.semi = (this.sideA + this.sideB + this.sideC) / 2 ;
      return this.semi;
    }
    area(){
      return Math.sqrt( this.semi * (this.semi - this.sideA) *  (this.semi - this.sideB) * (this.semi - this.sideC) );
    }
    isObtuse(){

    }
  }

  let tri1 = new Triangle(60, 90, 60);
  let tri2 = new Triangle(60, 60, 60);
  let tri3 = new Triangle(60, 45, 80);


  class LineSegment {
    constructor(x1, y1, x2, y2){
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
    }
    length(){
      return Math.sqrt( ((this.x2 - this.x1)*(this.x2 - this.x1)) + ((this.y2 - this.y1)*(this.y2 - this.y1)) );
    }
  }

  let lin1 = new LineSegment(1, 3, 4, 7);
  let lin2 = new LineSegment(2, 2, 10, 4);
  let lin3 = new LineSegment(0, 10, 22, 14);
  let lin4 = new LineSegment(2, 2, 4, 4);

  // NOTE: DO NOT REMOVE OR ALTER
  module.exports = {
    Rectangle: Rectangle,
    Triangle: Triangle,
    LineSegment: LineSegment
  }
