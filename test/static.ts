class Person1 {
    constructor(name:string) {
        console.log(name)
    }   
    static age:number = 0;
}

let p1 = new Person1('cq')
//console.log(p1.age)
console.log(Person1.age)