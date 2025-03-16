var fib = function(x){
    if(x<=1) return x;

    return fib(x-1)+fib(x-2);
}

console.log(fib(12));


//optimised approach using memo

var fib = function(x, memo={}){
    if(x<=1) return x;
    if(x in memo) return memo[x]; //checking if result is already computed

    memo[x] = fib(x-1, memo) + fib(x-2, memo);
    return memo[x];
}