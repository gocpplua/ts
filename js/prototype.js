// https://www.runoob.com/js/js-object-prototype.html
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
Person.nationality = 1            // 已存在构造器的对象中是不能添加新的属性
Person.prototype.pnationality = 2 // 使用 prototype 属性就可以给对象的构造函数添加新的属性：


p = new Person(1,2,3,4)
console.log(p) // Person { firstName: 1, lastName: 2, age: 3, eyeColor: 4 }
console.log(p.nationality)  // undefined
console.log(p.pnationality) // 2


// 所有的 JavaScript 对象都会从一个 prototype（原型对象）中继承属性和方法：









