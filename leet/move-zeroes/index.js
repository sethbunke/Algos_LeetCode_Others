/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nxt = 0; 
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i]; 
        if (val !== 0) {
            nums[nxt] = val;
            nxt++;
        }
    }

    for (let i = nxt; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums; 
};

let input = [0,1,0,3,12];
let result = moveZeroes(input);

console.log(result);