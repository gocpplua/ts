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