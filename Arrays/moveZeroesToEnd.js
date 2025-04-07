var moveZeros = function(arr){
    let n = arr.length;
    let temp = [];

    for(let i=0; i<n; i++){
        if(arr[i] !== 0){
            temp.push(arr[i]);
        }
    }

    for(let i=0; i<temp.length; i++){
        arr[i] = temp[i];
    }

    for(let i=temp.length; i<n; i++){
        arr[i] = 0;
    }

    return arr;

}

//optmised approach
var optmisedZero = function(arr){
    let n = arr.length;

    let j = -1;

    for(let i=0; i<n; i++){
        if(arr[i] === 0){
            j = i;
            break;
        }
    }

    if(j === -1) return;

    for(let i=j+1; i<n; i++){
        if(arr[i] != 0){
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }

    return arr;
}



let arr = [1,3,0,5,0,7,0,3,0,3,6,3,4];
let newArr = moveZeros(arr);
let optmisedArr = optmisedZero(arr);
console.log(newArr);
console.log(optmisedArr);