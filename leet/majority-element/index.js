
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {};
    let majority = Math.ceil(nums.length/2);

    for (const item of nums) {
        if (map[item] === undefined) {
            const count = 1;
            if (count >= majority) {
                return item;
            }
            map[item] = count; 
        }
        else {
            const count = map[item] + 1;
            if (count >= majority) {
                return item;
            }
            map[item] = count;
        }
    }
    return -1;
};

let input = [3,2,3];
let result = majorityElement(input)

console.log(result);