/**
 * @param {number[]} arr
 * @return {number}
 */

var countElements = function(arr) {
    let dict = {};
    let output = 0;

    arr.forEach(x => {
        let dValue = dict[x];
        dict[x] = dValue === undefined ? 1 : dValue + 1;
    });
    
    for (let key in dict) { 
        let count = dict[key];

        let plusOne =  parseInt(key) + 1;
        if (dict[plusOne] !== undefined) {
            output += count;
        }
    }

    return output;
}


// var countElements = function(arr) {
//     let dict = {};
//     let output = [];

//     arr.forEach(x => dict[x.toString()] = x);
    
//     for (let key in dict) { 
//         let val = dict[key];
//         let valuePlusOne = (val + 1).toString();
//         let plusValue = dict[valuePlusOne]; //.toString();
//         if (plusValue !== undefined) {
//             output.push(val);
//         }
//     }

//     return output.length;

// }

// var counx = tElements = function(arr) {
//     let valueSet = {};
//     let valMinusOne = {};

//     let output = [];

//     for(let i = 0; i <= arr.length - 1; i++) {
//         let val = arr[i];

//         valueSet[val.toString()] = val;
//         let minOne = val - 1;
//         valMinusOne[minOne.toString()] = minOne;
//     }

//     for (let key in valueSet) {
//         let val = valueSet[key];
//         let minusVal = valMinusOne[key];

//         if (minusVal) {
//             output.push(val)
//         }
        
//     }

//     return output; 

// };

//let input = [1,2,3];
let input = [1,1,2,2];
//let input = [1,3,2,3,5,0];
let result = countElements(input);

console.log(result);