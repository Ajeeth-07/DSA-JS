/*

You are given an array arr[] containing positive integers. The elements in the array arr[] range from 1 to n (where n is the size of the array), and some numbers may be repeated or absent. Your task is to count the frequency of all numbers in the range 1 to n and return an array of size n such that result[i] represents the frequency of the number i (1-based indexing).

Examples

Input: arr[] = [2, 3, 2, 3, 5]
Output: [0, 2, 2, 0, 1]
Explanation: We have: 1 occurring 0 times, 2 occurring 2 times, 3 occurring 2 times, 4 occurring 0 times, and 5 occurring 1 time.

*/

var frequencyCount = function(arr){
    let size = arr.length;

    let freq = new Array(size).fill(0); //initialising new array of size with 0

    for(let i=0; i<size; i++){
        if(arr[i] >= 1 && arr[i] <= size){
            freq[arr[i]-1]++;
        }
    }

    return freq;
}

console.log(frequencyCount([2,3,7,8,9,3,2,2,5]));