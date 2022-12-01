var n:any = "abcd"
console.log(typeof n) // output:string
for(let j in n){
    console.log(j, n[j]) // output:0 a 1 b 3 c 4 d
}

for (const j of n) {
    console.log(j) // output: a b c d
}

/* // error:n.forEach is not a function
n.forEach(function(c:any){
    console.log(c)
})
*/


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// TypeScript\lib\lib.es5.d.ts
/**
 * // Arrow function
forEach((currentValue) => { ... } )
forEach((currentValue, index) => { ... } )
forEach((currentValue, index, array) => { ... } )

// Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)
 */
n.split('').forEach(function(c:any){
    console.log(c)
})

n.split('').forEach(function(c:any, index:any){
    console.log(c, index)
})

n.split('').forEach(function(c:any, index:any, arr:any){
    console.log(c, index, arr) // output:a 0 [ 'a', 'b', 'c', 'd' ]
})

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every
let ret = n.split('').every((c:any) =>{
    return c == 'a'
})
console.log("ret:", ret)

 ret = n.split('').every((c:any) =>{
    return c != 'p'
})
console.log("ret:", ret)