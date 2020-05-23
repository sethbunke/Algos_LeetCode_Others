/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let length = nums.length;

    let outputArray = [...Array(length)];
    outputArray[0] = 1;

    for (i = 1; i < length; i++) {
        outputArray[i] = nums[i - 1] * outputArray[i - 1];
    }

    let r = 1;

    for (let i = length - 1; i >= 0; i--) {
        outputArray[i] = outputArray[i] * r;
        r = r * nums[i];
    }

    return outputArray; 
};

// var productExceptSelf = function(nums) {
//     let product = nums.reduce((acc, curr) => acc * curr);
//     let output = nums.map(x => x === 0 ? 0 : (product / x));
//     return output;
// };

let input = [1,2,3,4]; // [1,0]; // [0,0]; // [1,2,3,4];
let result = productExceptSelf(input);

console.log(result);