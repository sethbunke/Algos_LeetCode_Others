/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let hash = [];
    hash[0] = -1;
    
    let maxLength = 0;
    let count = 0;

    for(let i = 0; i < nums.length; i++){
        if (nums[i] === 0) {
            count += -1;
        }
        else {
            count += 1;
        }

        if (hash[count]) {
            maxLength = Math.max(maxLength, 1-hash[count]);
        }
        else {
            hash[count] = i;
        }
    }

    return maxLength;
    
};


let input = [0,1,0,1];

let result = findMaxLength(input);

console.log(result);