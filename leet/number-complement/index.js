



let toBinary = val => {
    let binary = '';
    while(val > 0) {
        binary = (val % 2) + binary;
        val = Math.floor(val / 2);
    }
    return binary;
}


var findComplement = function(num) {
    let binary = '';
    while(num > 0) {
        let x = (num % 2) === 0 ? 1 : 0;
        binary = x + binary;
        num = Math.floor(num / 2);
    }
    let output = parseInt(binary, 2);
    return output; 
};


let input = 5;

let result = toBinary(input);
console.log(result);


let comp = findComplement(input);

console.log(comp);
