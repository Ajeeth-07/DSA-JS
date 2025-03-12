var isPalindrome = function(x){
    var originalNum = x;
    var revNum = 0;
    if(x < 0) return false //0 is a palindrome

    while(x != 0){
        var ld = x%10; //extracting last digit
        x = Math.trunc(x/10); //removing last digit from x;


        revNum = revNum*10 + ld;
    }

    return revNum === originalNum;
}


console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(83940));
