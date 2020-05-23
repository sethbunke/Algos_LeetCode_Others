/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    const char = '#';
    let s1 = testStack(S, char);
    let t1 = testStack(T, char);

    return s1 === t1;
};


//let S = "ab#c", T = "ad#c";


let removeEven = (numbers) => {

    for (let i = numbers.length - 1; i >= 0; --i) {
        //if (numbers[i] % 2 === 0) {
        if (numbers[i] === '#') {
            numbers.splice(i, 1); // Remove even numbers
            numbers.splice(i-1, 1);
        }
      }

}


//let result = removeEven(['1','2','#','3','4','#','5','6','#']);

let testStack = (input, char) => {
    let output = [];

    for (let i = 0; i < input.split('').length; i ++) {
        let el = input[i];
        if (el === char) {
            output.pop();
        }
        else {
            output.push(el);
        }
    }
    return output.join('');  
}

//let input = ['1','2','#','3','4','#','5','6','#','7','8','8','#','#','9'];

//let input = '12#34#56#788##9';
//let result = testStack(input, '#');

//let S = "ab##", T = "c#d#"

//let S = "a##c", T = "#a#c"

let S = "a#c", T = "b"; 
let result = backspaceCompare(S, T);

console.log(result)