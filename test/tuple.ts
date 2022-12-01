let tuple1 = [1, "1"]
tuple1[0] = 2
tuple1[1] = 3
console.log(tuple1) // [ 2, 3 ]

let [x, y] = tuple1
console.log(x, y) // 2 3