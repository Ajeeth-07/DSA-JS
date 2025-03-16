var charHash = function(str){
    var hash = new Array(26).fill(0);

    for(let i=0; i<str.length; i++){

        let ch = str[i].toLowerCase();  //converting to lowercase

        if(ch >= 'a' && ch <= 'z'){  //ignoring spaces and non-chars
            let index = ch. charCodeAt(0) - "a".charCodeAt(0); //converting char code to index
            hash[index]++;
        }
    }
    return hash;

}
    

console.log(charHash("Ajeeth Shinde"));