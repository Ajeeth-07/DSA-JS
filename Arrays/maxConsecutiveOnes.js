/*

Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

*/

function maxOnes(nums){
    let maxi = 0;
    let cnt = 0;

    for(let i=0; i<nums.length; i++){
        if(nums[i] === 1){
            cnt++;
            maxi = Math.max(maxi, cnt);
        }else{
            cnt = 0;
        }
    }

    return maxi;
}

let nums = [1, 1, 0, 1, 1, 1];
console.log(maxOnes(nums));