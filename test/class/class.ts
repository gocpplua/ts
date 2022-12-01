class Animal {
  public name:string;
  constructor(name:string) {
      this.name = name;
  }
  sayHi() {
      return `My name is ${this.name}`;
  }
  setName(name:string){
    this.name = name;
  }
}

let a = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack

a.setName("tom");
console.log(a.sayHi()); // My name is Jack


class MyObj{
    myArray:Array<number> = [];
    myDouble:number = 0;
    myFunction(arg1:number,arg2:number):number{
      return this.myDouble + arg1 + arg2;
    }
    
}

var globalObject = new MyObj();