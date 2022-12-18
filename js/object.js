// https://www.runoob.com/js/js-objects.html
// 创建新对象有两种不同的方法：
// 使用 Object 定义并创建对象的实例。
// 使用函数来定义对象，然后创建新的对象实例。

// 方式一、创建了对象的一个新实例，并向其添加了四个属性：
person=new Object();
person.firstname="John";
person.lastname="Doe";
person.age=50;
person.eyecolor="blue";

console.log(person)

// 也可以使用对象字面量来创建对象，语法格式如下：
person={firstname:"John",lastname:"Doe",age:51,eyecolor:"blue"};
console.log(person)

// 方式二、使用对象构造器(本例使用函数来构造对象)
function Person(firstname,lastname,age,eyecolor)
{
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.eyecolor=eyecolor;
}

var myFather=new Person("John","Doe",50,"blue");
console.log(myFather) //  this 输出一个 Person 对象

// new 和不 new的区别：
// 如果 new 了函数内的 this 会指向当前这个 person 并且就算函数内部不 return 也会返回一个对象。
// 如果不 new 的话函数内的 this 指向的是 window。
var myMother=Person("Sally","Rally",48,"green");
console.log(myMother) // // this 输出 window 对象 =》 undefined


// 在 JavaScript 中，不会创建类，也不会通过类来创建对象（就像在其他面向对象的语言中那样）。
// JavaScript 基于 prototype，而不是基于类的。
for ( x in person) {
  console.log(x, " ", person[x])
}

// 对象是可变的，它们是通过引用来传递的。
person.age = 111
console.log(person)
