/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //console.log('test');
    let dict = {};
    nums.forEach(x => {
        if (!dict[x]) {
            dict[x] = 1;
        }
        else {
            dict[x] += 1
        }
    })

    let result = -1;

    Object.keys(dict).forEach(x => {
        let val = dict[x];
        if (val === 1) {
           result = x;
        }
    })
    return result; 
};


let result = singleNumber([4,1,2,1,2]);
console.log(result);