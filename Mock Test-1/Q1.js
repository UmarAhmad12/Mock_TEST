/*
Q1 Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

Constraints:
a. 1 <= nums.length <= 10^4
b. -2^31 <= nums[i] <= 2^31 - 1

*/

function moveZeroes(nums) {
    let no_of_zero = 0;
    let ans = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            no_of_zero++;
        } else {
            ans.push(nums[i]);
        }
    }
    
    // Append zeros at the end
    for (let i = 0; i < no_of_zero; i++) {
        ans.push(0);
    }
    
    // Modify the original array
    for (let i = 0; i < nums.length; i++) {
        nums[i] = ans[i];
    }
    
    return nums; // or return ans; if you prefer the modified array
}

let results = moveZeroes([0,1,0,3,12]);
console.log(results);