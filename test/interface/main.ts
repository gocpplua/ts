interface namelist { 
    [index:number]:string 
 } 

 var list2:namelist = ["aa"]
 console.log(list2)


 interface Person { 
    age:number 
 } 
  
 interface Musician extends Person { 
    instrument:string 
 } 
  
 var drummer = <Musician>{}; 
 drummer.age = 27 
 drummer.instrument = "Drums" 
 console.log("年龄:  "+drummer.age)
 console.log("喜欢的乐器:  "+drummer.instrument)


 interface IParent1 { 
    v1:number 
} 
 
interface IParent2 { 
    v2:number 
} 
 
interface Child extends IParent1, IParent2 { } 
var Iobj:Child = { v1:12, v2:23} 
console.log("value 1: "+Iobj.v1+" value 2: "+Iobj.v2)