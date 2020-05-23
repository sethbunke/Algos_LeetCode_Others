/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length === 1) {
        return true; 
    }

    let index = 0; 

    while (true) {
        if (index === (nums.length - 1)) {
            return true
        } 

        let nextIndex = index + nums[index]; 

        if (nextIndex >= nums.length || nums[nextIndex] === 0) {
            return false;
        }

        index = nextIndex; 

        // let value = nums[index];
        // let nextIndex = index + value; 
        // if (nextIndex === (nums.length - 1)) {
        //     return true;
        // }
        // if (nextIndex >= nums.length || nums[nextIndex] === 0) {
        //     return false;
        // }
        // index = nextIndex;
    }
};

let input = [2,0]; //[1]; // [3,2,1,0,4]; // [2,3,1,1,4];

let result = canJump(input);

console.log(result);