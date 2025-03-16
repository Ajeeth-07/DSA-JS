var bubbleSort = function(arr){

    let n = arr.length;

    for(let i=n-1; i>=0; i--){
        let didSwap = 0;    //optimisation if array is already sorted
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


//T.C => O(n^2) => average and worst 
//T.C => O(n) => best 
