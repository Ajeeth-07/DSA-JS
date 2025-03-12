var reverse = function(x){
    
   
    let rev = 0;

    while(x != 0){
        var ld = x%10;
         x = Math.trunc(x/10);

        if(rev > 2147483647/10) return 0;
        if(rev < -2147483648/10) return 0;


        rev = rev*10 + ld;
    }
    
    return rev;
}


console.log(reverse(123));