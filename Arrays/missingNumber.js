//missing Number from array 
/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Example 1:

Input: nums = [3,0,1]

Output: 2

Explanation:

n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
*/


//brute force = linear search
function missingNumber(nums1){
    let n = nums1.length;
    let ans;
    for(let i=0; i<n; i++){
        let flag = 0;
        for(let j=0; j<n; j++){
            if(nums1[j] === i){
                flag = 1;
                break;
            }
        }

        if(flag === 0) ans = i;
    }

    return ans;
}



//optimal approach total-sum
function optimalMissing(nums1){
    let n = nums1.length;
    let sum = 0;
    let total = n * (n+1) / 2;
    for(let num of nums){
        sum += num;
    }

    return total-sum;
}

let nums = [3, 0, 1];
console.log(missingNumber(nums));
console.log(optimalMissing(nums));