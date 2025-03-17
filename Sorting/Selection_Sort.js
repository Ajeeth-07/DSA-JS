/*
 Selection Sort Algorithm
In each pass, we select the smallest element from the unsorted part and swap it with the first element of the unsorted part.

Key Observations
✔ Each pass selects the smallest element from the remaining unsorted part.
✔ Fewer swaps compared to Bubble Sort (better for write-heavy memory).
✔ Time Complexity: Worst-case O(n²), best-case O(n²) (even if sorted).
*/


selectionSort = function(arr){
    let size = arr.length;

    for(let i=0; i<=size-2; i++){
        let mini = i;
        for(let j=i; j<=size-1; j++){
            if(arr[j] < arr[mini]){
                mini = j;
            }   
        }

        let temp = arr[mini];
        arr[mini] = arr[i];
        arr[i] = temp;
    }

    return arr;
}


console.log(selectionSort([2,6,1,4,3,78,54,32]));

//TC => O(n^2)  best, worst, and average