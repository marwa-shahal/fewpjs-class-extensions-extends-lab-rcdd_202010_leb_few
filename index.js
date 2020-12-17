class Polygon{
  constructor(arrofsides){
    this.arrofsides=arrofsides;
  }
  get countSides(){
    return this.arrofsides.length;
  }
  get perimeter(){
    let sum=0;
    for(let i=0; i<this.arrofsides.length;i++){
      sum= sum+this.arrofsides[i];
    }
    return sum;
  }
}

class Triangle extends Polygon{
  get isValid(){
    if (this.arrofsides.length===3)
    return (this.arrofsides[0]+this.arrofsides[1]>this.arrofsides[2] && this.arrofsides[1]+this.arrofsides[2]>this.arrofsides[0] );
    }
    
  }


class Square extends Polygon{
  get isValid(){
  if(this.arrofsides.length===4)
  return (this.arrofsides[0]===this.arrofsides[1] && this.arrofsides[0]===this.arrofsides[2] && this.arrofsides[0]===this.arrofsides[3]);
  }
  get area(){
    if (this.arrofsides.length===4){
      return this.arrofsides[0]**2;
    }
  }
}