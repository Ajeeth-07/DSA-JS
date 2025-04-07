var removeDuplicates = function(nums){
    let uniqueNums = new Set(nums); //storing unique elements in Set

    let index = 0;
    for(let num of uniqueNums){
        nums[index] = num;
        index++;
    }

    return index;
}


let nums = [1,1,2,2,3,3,4,4,5];
let newLength = removeDuplicates(nums);
console.log(newLength);
console.log(nums.slice(0, newLength));