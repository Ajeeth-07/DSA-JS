var insertionSort = function(arr){
    let n = arr.length;

    for(let i=0; i<=n-1; i++){
        let j = i;
        while(j > 0 && arr[j-1] > arr[j]){
            let temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;


            j--;
        }
    }
    return arr;
}

console.log(insertionSort([2, 6, 1, 4, 3, 78, 54, 32]));

//T.C => O(n^2) worst and average
//T.c => O(n) best case
