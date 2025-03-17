class QuickSort{

    quickSort(arr, low, high){
        if(low < high){
            let pIndex = this.partition(arr,low,high);
            this.quickSort(arr, low, pIndex-1);
            this.quickSort(arr, pIndex+1, high);
        }
        return arr;
    }


    partition(arr, low, high){
        let pivot = arr[low];
        let i = low;
        let j = high;

        while(i<j){
          while (arr[i] <= pivot && i <= high - 1) {
            i++;
          }
          while (arr[j] > pivot && j >= low + 1) {
            j--;
          }

          if (i < j) [arr[i], arr[j]] = [arr[j], arr[i]]; // ✅ Correct swapping
        }

        [arr[low], arr[j]] = [arr[j], arr[low]]
        return j;
    }

}

let arr = [5, 2, 9, 1, 6, 3, 6, 8, 3, 23];
let sorted =  new QuickSort();
console.log(sorted.quickSort(arr, 0, arr.length-1));