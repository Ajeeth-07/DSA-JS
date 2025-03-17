class mergeSort{

    //divide and merge

    merge(arr, low, mid, high){
        let temp = [];
        let left = low, right = mid+1;

        while(left <= mid && right <= high){
            if(arr[left] <= arr[right]){
                temp.push(arr[left]);
                left++;
            }else{
                temp.push(arr[right]);
                right++;
            }
        }

        //copying remaining elements
        while(left <= mid){
            temp.push(arr[left]);
            left++;
        }
        //copying remaining elements
        while(right <= high){
            temp.push(arr[right]);
            right++;
        }

        //copying sorted elements into original array
        for(let i=low; i<=high; i++){
            arr[i] = temp[i-low];
        }
    }

    mergeSort(arr, low, high){
        if(low >= high) return;

        let mid = Math.floor((low+high) / 2);

        this.mergeSort(arr, low, mid);
        this.mergeSort(arr, mid+1, high); //since mergeSort is a method it is called using this

        this.merge(arr, low, mid, high);

    }


}


let arr = [5,2,9,1,6,3,6,8,3,23];
let sorter = new mergeSort();
sorter.mergeSort(arr, 0, arr.length-1);
console.log(arr);


/*
T.C => splitting the array => O(log n);
        Merging each level => O(n)
        total => O(nlogn)

S.C => O(n) we use extra temp array

important info

In JavaScript, when a method is inside a class, it belongs to that class instance.

✅ Using this.mergeSort() (Correct Way)
When you call this.mergeSort(arr, low, mid);, it explicitly calls the mergeSort method from the current instance of the class.
Without this, JavaScript won’t recognize mergeSort as a method of the class.
❌ What Happens If We Remove this?
If you just write:

mergeSort(arr, low, mid);
JavaScript will look for a function named mergeSort in the global scope (or a local function inside mergeSort itself).
Since no such function exists globally, you’ll get a ReferenceError: mergeSort is not defined.

✅ Correct Way
this.mergeSort(arr, low, mid);
this.mergeSort(arr, mid + 1, high);

❌ Incorrect Way (Causes Error)
mergeSort(arr, low, mid);  // ❌ JavaScript doesn't know where this function is.
*/