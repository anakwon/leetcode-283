283. Move Zeroes
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const zero = [];
    const nonZero = [];
    
    for (var i = 0; i < nums.length; i++) {
        if( nums[i] === 0) {
            zero.push(nums[i]);
        } else {
            nonZero.push(nums[i]);
        }
    }
    nums.length = 0;
    nums.push(...nonZero, ...zero)
};