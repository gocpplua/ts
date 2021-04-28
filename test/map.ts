// tsc map.ts --target es6

let map = new Map()
map.set(1,1);
map.set(2,1);
map.set(2,11);
console.log(map) // Map(2) { 1 => 1, 2 => 11 }

for (const [key, val] of map) {
    console.log(key, val)
}

for(let entry of map){
    console.log(entry)
}