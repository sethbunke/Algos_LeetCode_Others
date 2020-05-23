/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let hash = {};

    strs.forEach(s => {
        let sorted = s.split('').sort().join('');
        if (hash[sorted] === undefined) {
            hash[sorted] = [s];
        }
        else {
            hash[sorted].push(s);
        }
    });

    let output = [];

    for (let key in hash) {
        output.push(hash[key])
    }

    return output; 
};


let input = ["eat", "tea", "tan", "ate", "nat", "bat"];

let result = groupAnagrams(input);

console.log(result);