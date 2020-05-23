




let isASubsequence = (find, str) => {


    //if find.length > str, return false 
    let findIndex = 0;
    let findArr = find.split('');

    for (const char of str.split('')) {

        let f = findArr[findIndex];

        if (f === char) {
            findIndex++;
        }

        if (findIndex === find.length) {
            return true;
        }
    }

    return false; 
    
}


const str = "barbell"
const sub = "bells"


let result = isASubsequence(sub, str);

console.log(result);