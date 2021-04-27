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
const str:string = "$1.age_ * $2.age_ + 1";
function person(...params:any[]) {
    let count:Number = params.length;
    let strReplace:string = str;
    for(let val in params){
        let index:number =  Number(val) + 1;
        let re=`\$${index}`;
        strReplace = strReplace.replace(re, `params[${val}]`);
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
