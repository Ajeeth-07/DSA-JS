/*

Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2

*/


function subArraySum(nums, k){
    let n = nums.length;
    let count = 0;
    for(let i=0; i<n; i++){
        let sum = 0;
        for(let j=i; j<n; j++){
            sum += nums[j];

            if(sum === k) count++;
        }
    }

    return count;
}


let nums = [1, 2, 3], k = 3;

console.log(subArraySum(nums,k));