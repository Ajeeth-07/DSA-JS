/*

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Example 1:

Input: nums = [2,2,1]

Output: 1

Example 2:

Input: nums = [4,1,2,1,2]

Output: 4

*/


//brute force 
function singleNumber(nums){
    let cnt = 0;
    let n = nums.length;
    let ans;

    for(let i=0; i<n; i++){
        let num = nums[i]
        for(let j=0; j<n; j++){
            if(nums[j] === num){
                cnt++;
            }
        }

        if(cnt == 1) ans = num;
    }

    return ans;
}


let nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));