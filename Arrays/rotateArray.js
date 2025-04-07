var rotate = function(arr, k){
    let n = arr.length;
    k = k%n;
    let temp = new Array(n);

    for(let i=0; i<n; i++){
        temp[i] = arr[i];
    }

    for(let i=0; i<n; i++){
        arr[i] = temp[i];
    }

    return arr;
}


//Optimised approach
var rotateOptimised = function(nums, k){
    let n = nums.length;
    k = k % n;

    nums.reverse(); //reversing entire array

    nums.splice(0,k, ...nums.slice(0,k).reverse()); //reversing first k elements

    nums.splice(k, n-k, ...nums.slice(k,n).reverse()); //reversing n-k elements

    return nums;
}


let arr = [1,2,3,4,5,6,7,8];
let nums = [1,2,3,4,5,6,7,8];
let rotatedArr = rotate(arr, 3);
let OptimisedArr = rotateOptimised(arr, 3);
console.log(rotatedArr);
console.log(OptimisedArr);