function f1(str:string, str1?:string){
    console.log(str, str1)
}

function f2(str:string, str1:string = "empty"){
    console.log(str, str1)
}

function f3(...str:string[]){
    console.log(str);
}

// TypeScript 支持使用 JavaScript 内置的构造函数 Function() 来定义函数：
// var res = new Function ([arg1[, arg2[, ...argN]],] functionBody)
let f4 = new Function("a", "return a")  

// lambada
let f5 = (a:number):number =>{
    return a + 1
}

let f6 = (a)=>{
    if(typeof a == "number"){
        console.log("number")
    }
    else if(typeof a == "string"){
        console.log("string")
    }
    else{
        console.log("unknow obj")
    }
}

f1("1", "2"); // output: 1 2
f1("1"); // output: 1 undefined

f2("1", "2"); // output: 1 2
f2("1"); // output: 1 empty

f3("1", "2"); // output: [ '1', '2' ]
f3("1"); // output: [ '1' ]

console.log(f4(1)) // output:1
console.log(f5(1)) // output:2

f6(1) // number
f6("11") // string
f6(true) // unknow obj