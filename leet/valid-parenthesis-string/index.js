/**
 * @param {string} s
 * @return {boolean}
 */
// var checkValidString = function(s) {
    
//     if ((s.length === 0) || (s === '*')) {
//         return true;
//     }

//     if (s.length === 1) {
//         return false; 
//     }
    
//     let str = s.split('');
//     let leftBalance = 0; 

//     str.forEach(x => {
//         if (x === ')') {
//             leftBalance -=1;
//         }
//         else {
//             leftBalance += 1;
//         }

//         if (leftBalance < 0) {
//             return false;
//         }
//     });

//     if (leftBalance === 0) {
//         return true; 
//     }

//     let str1 = str.reverse();
//     let rightBalance = 0;

//     str1.forEach(x => {
//         if (x === '(') {
//             rightBalance -= 1;
//         }
//         else {
//             rightBalance += 1;
//         }
        
//         if (rightBalance < 0) {
//             return false;
//         }
//     });   

//     return true; 
// };

var checkValidString = function(s) {
    if (s.length < 1) {
        return true;
    }

    let balance = 0; 

    let str = s.split('');

    for (let i = 0; i < str.length; i++) {
        
        if (str[i] === ')') {
            balance -= 1;
        }
        else {
            balance += 1;
        }

        if (balance < 0) {
            return false;
        }
    }

    if (balance === 0) {
        return true; 
    }

    balance = 0;

    for (let i = str.length - 1; i >= 0; i--) {
        if (s[i] === '(') {
            balance -= 1;
        }
        else {
            balance += 1;
        }

        if (balance < 0) {
            return false;
        }
    }

    return true; 
}


let input = "(*)";

let result = checkValidString(input);

console.log(result);