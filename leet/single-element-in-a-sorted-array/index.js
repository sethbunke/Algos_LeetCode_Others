/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    
    let map = {};

    for (const item of nums) {
        if (map[item] === undefined) {
            map[item] = 1;
        }
        else {
            delete map[item];
        }
    }

    for (let item in map) {
        return item;
    }
};

let input = [1,1,2,3,3,4,4,8,8];
let result = singleNonDuplicate(input);

console.log(result);