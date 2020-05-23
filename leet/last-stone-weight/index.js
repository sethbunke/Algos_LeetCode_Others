/**
 * @param {number[]} stones
 * @return {number}
 */

 // LOOK AT RECURSION 
var lastStoneWeight = function(stones) {

    let output = null;

    while(stones.length > 1) {
        let sorted = stones.sort((a,b ) => a - b);
        let y = sorted.pop();
        let x = sorted.pop();
        let diff = y - x;
        if (diff > 0) {
            sorted.push(diff);
        }
        stones = sorted; 
    }
    output = stones.length === 0 ? 0 : stones[0];
    return output;
};

let input = [2,7,4,1,8,1];

let result = lastStoneWeight(input);

console.log(result);