/**
 * 可变参数 + 正则表达式 + eval
 */


class Person {
    name_:string;
    age_:number;
    constructor(name:string, age:number) {
        this.name_ = name;
        this.age_ = age;
    }
    
};
// const str:string = "max(0.5,min(0.7,$1.viplevel/10))"
const str:string = "max(3, $1.age_ * $2.age_ + 1)";
let mathMap = new Map([
    ["min", "Math.min"],
    ["max", "Math.max"],
]);


function person(...params:any[]) {
    let count:Number = params.length;
    let strReplace:string = str;
    for(let val in params){
        let index:number =  Number(val) + 1;
        let re=`\$${index}`;
        strReplace = strReplace.replace(re, `params[${val}]`);
    }

    for (const [key,value] of mathMap) {
        strReplace = strReplace.replace(key, value);
        console.log("mathMap:" + strReplace)
    }
    let ret = eval(strReplace)
    if(isNaN(ret)){
        console.log("NaN:" + strReplace)
    }
    else{
        console.log(ret)
    }
    
}

let p:Person = new Person("cc", 1);
person(p, p);
//console.log(str.replace(re, "aa"));
