/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let visited = [];

    while(true) {
        if (n === 1) {
            return true;
        }
        
        n = n.toString().split('').map(x => x * x).reduce((accumulator, currentValue) => accumulator + currentValue);

        if (visited.indexOf(n) >= 0) {
            return false;
        }

        visited.push(n);
    }
};



let input = 19;

let result = isHappy(input);

console.log(result);