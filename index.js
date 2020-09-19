// Your code here
class Polygon{
  constructor(sides=[]){
    this.sides=sides;
  }
  get countSides(){
    let sidesNo=0;
    this.sides.forEach(side=>sidesNo++);
    return sidesNo;
  }
  get perimeter(){
    return this.sides.reduce(function(acc,side){return acc+side;});
  }
}

class Triangle extends Polygon{
  constructor(sides) {
    this.sides=sides;
    super(sides); 
  }
  // get perimeter(){
  //   return super.perimeter();
  // }
  get isValid(){
    return (super.countSides()===3? true: false)
  }
}
class Square extends Polygon{
  constructor(sides) {
    this.sides=sides;
    super(sides); 
  }
  get isValid(){
    if(this.sides.length===4){
      if(this.sides[0]===this.sides[1]===this.sides[2]===this.sides[3]){
        return true;
      }
      else
      return false;
    }
  }
  get area(){
    // if(this.isValid()){
    return this.sides[0]*this.sides[0];
  }

}