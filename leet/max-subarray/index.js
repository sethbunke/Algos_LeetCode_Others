/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let answer = Number.MIN_SAFE_INTEGER;
    let a = 0;
    for(let x in nums){
        a += nums[x];
        answer = Math.max(answer, a); //if the new value is higher use it
        a = Math.max(a, 0); //if a is negative, then use 0 
        //console.log(answer);
    }
    return answer;
};


let input = [-2,1,-3,4,-1,2,1,-5,4];
let result = maxSubArray(input);

console.log(result); 