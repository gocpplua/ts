interface IPerson{
    fName:string,
    sName:string,
    sayhi:()=>string;
}

let custom : IPerson = {
    fName:"Tom",
    sName:"Tom",
    sayhi:():string=>{
        return "fName";
    }
}

console.log(custom.fName)
console.log(custom.sayhi())


console.log(`接口中我们可以将数组的索引值和元素设置为不同类型，索引值可以是数字或字符串。`)
interface namelist { 
    [index:number]:string 
 } 
  
 //var list1:namelist = ["John", 1,"Bran"] // 错误元素 1 不是 string 类型
var list2:namelist = ["11"]
console.log(list2, typeof list2)

 interface ages { 
    [index:string]:number 
 } 
 
 //var agelist:ages; 
 //agelist["John"] = 15   // 错误 :Cannot set property 'John' of undefined


 var agelist:ages = {}; 
 agelist["John"] = 15   // 正确 
 //agelist[2] = "nine"   // 错误
 console.log(agelist, typeof list2)


 /**
  * interface IPerson{
    fName:string,
    sName:string,
    sayhi:()=>string;
}
  */
 interface Mus extends IPerson{
     addr:string;
 }

 let mus:Mus = <Mus>{};
 mus.addr = "hz";
 console.log(mus)