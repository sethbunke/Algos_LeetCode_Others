

let reverseInPlace = (arr, i = 0, j = arr.length - 1) => {
    //let arr = str.split('');
    // let i = 0; 
    // if (j === undefined) {
    //     j = arr.length - 1;
    // }
    
    //let j = arr.length - 1;

    while (i <= j) {
        let val = arr[i];
        arr[i] = arr[j];
        arr[j] = val;
        i++;
        j--;
    }

    return arr; //.join('');
    // for (let i = arr.length - 1; i >= 0; i--) {

    // }

}




// let input = 'hello1$';

// let result = reverseInPlace(input);

// console.log(result);

let reverseWords = (arr) => {

    arr = reverseInPlace(arr);

    let start = 0;

    for (let i = 0; i <= arr.length; i++) {
        let char = arr[i];

        if (i === arr.length || char === ' ') {
            arr = reverseInPlace(arr, start, i-1);
            start = i + 1;
        }
        
    }

    return arr; 
}


const message = [ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ];

// let reversed = reverseInPlace(message);

// let r1 = reverseInPlace(reversed, 0, 4);

// let r2 = reverseInPlace(r1, 6, 10);

// console.log(reversed);

let r3 = reverseWords(message);

console.log(r3);