var sumOfDivisors = function(x){
    var sum = 0;

    for(let i=1; i<=x; i++){
        sum += i * Math.trunc(x/i);   //sum of divisors from 1 to n
    }

    return sum;
}


console.log(sumOfDivisors(12));