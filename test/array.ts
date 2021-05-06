let a = [1, 2];
let b = [10, 11];
let ab = a.concat(b)
console.log(ab) // [ 1, 2, 10, 11 ]

let ret1 = ab.every((val, index, ab)=>{
    return val > 0;
})

console.log(ret1) // true

let ret2 = ab.every((val, index, ab)=>{
    return val > 10;
})

console.log(ret2) // false

let ret3 = ab.filter((val)=>{
    return val > 3
})

console.log(ret3) // [ 10, 11 ]