let message: string = 'Hello World';
console.log(message);

/**
 * 
 * @param _params 
 */
function are(_params: number) {
    const aa = 'fsfsf';
    const a : string = aa
    console.log(a)
}



function fib(n:number) {
    if(n < 2){
        return n;
    }

    const result : number = fib(n - 1) + fib(n - 2);
    return result;
}

const result = fib(5);