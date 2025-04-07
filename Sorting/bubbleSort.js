/*
Bubble Sort is a simple comparison-based sorting algorithm that repeatedly swaps adjacent elements if they are in the wrong order. The largest element "bubbles up" to its correct position at the end of each pass.
*/


var bubbleSort = function(arr){

    let n = arr.length;

    //outer loop runs from the last index (n-1) to the first index 0
    for(let i=n-1; i>=0; i--){
        let didSwap = 0;    //optimisation if array is already sorted
        //inner loop runs from the first index 0 to last index i-1
        for(let j=0; j<=i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                didSwap = 1;
            }
        }

        if(didSwap === 0) break;
    }
    console.log("runs");
    return arr;
}

console.log(bubbleSort([2, 6, 1, 4, 3, 78, 54, 32, 3, 5, 89, 43]));



//Recursive Bubble sort
function recursiveBubbleSort(arr, n) {
    // Base case: If array size is 1, return
    if (n === 1) return;

    // Perform one pass of Bubble Sort
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            // Swap adjacent elements if they are in the wrong order
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }

    // Recursive call for the remaining unsorted part
    recursiveBubbleSort(arr, n - 1);
}

let arr = [5, 2, 9, 1, 6];
recursiveBubbleSort(arr, arr.length);
console.log(arr);  // Output: [1, 2, 5, 6, 9]



//T.C => O(n^2) => average and worst 
//T.C => O(n) => best 
