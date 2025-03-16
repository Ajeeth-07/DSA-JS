var lcmGcd = function(a,b){
    var dupA = a;
    var dupB = b;

    while(a>0 && b>0){
        if(a>b){                //Euclidean algorithm
            a = a%b;
        }else{
            b = b%a;
        }
    }

    var gcd = (a==0) ? b : a;
    var lcm = Math.trunc(dupA*dupB/gcd);

    return [lcm,gcd];
}


console.log(lcmGcd(5,10));