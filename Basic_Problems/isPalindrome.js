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


// console.log(isPalindrome(121));
// console.log(isPalindrome(-121));
// console.log(isPalindrome(83940));


//for string
var isPalindromeString = function(s){
   

    //optimised version removing alpha-numeric and spaces
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");


     let left = 0;
     let right = s.length - 1;

    while(left <  right){
        if(s[left] !== s[right]){
            return false;
        }
        left++;
        right--;
    }

    return true;
}

console.log(isPalindromeString("racecar"));
console.log(isPalindromeString("hello"));
console.log(isPalindromeString("A man, a plan, a canal, Panama"));
