var leftRotate = function(arr, k){
    let n = arr.length;
    k = k%n;
    let temp = new Array(n);

    for(let i=0; i<n-k; i++){
        temp[i] = arr[i+k];
    }

    for(let i=0; i<k; i++){
        temp[n-k+i] = arr[i];
    }

    for(let i=0; i<n; i++){
        arr[i] = temp[i];
    }

    return arr;
}

let arr = [1,2,3,4,5,6,7,8];
let rotatedArr = leftRotate(arr, 3);
console.log(rotatedArr);