

// let mergeArrays = (arr1, arr2) => {

//     let merged = [];
//     let index = 0;

//     let v1 = arr1[index];
//     let v2 = arr2[index];

//     if (v1 <= v2) {
//         merged.push(v1);
//         arr1.shift();
//     }
//     else {
//         merged.push(v2);
//         arr2.shift();
//     }

    
    
//     //if arr1 or arr2 length === 0 return the other

//     // let p1 = 0;
//     // let p2 = 0; 

//     // let output = [];



//     // while (p1 < arr1.length) {

//     //     let v1 = arr1[p1];
//     //     let v2 = arr2[p2];

//     //     if (v1 < v2) {

//     //     }

//     //     //console.log(arr1[p1]);
//     //     //p1 += 1;

//     //     // while (p2 < arr2.length) {
//     //     //     p2 +=1
//     //     // }
//     // }


// };

// let mergeSortedArrays = (arr1, arr2) => {

//     let output = [];

//     while (arr1.length > 0 || arr2.length > 0) {
//         let a1 = null;
//         let a2 = null;

//         if (arr1.length > 0) {
//             a1 = arr1[0];
//         }
//         if (arr2.length > 0) {
//             a2 = arr2[0];
//         }

//         let val = null; 

//         if (a1 === undefined) {
//             val = arr2.shift();
//         }
//         else if (a2 === undefined) {
//             val = arr2.shift();
//         }
//         else {
//             val = a1 < a2 ? arr1.shift() : arr2.shift();
//         }
//         //check if one of the values is null
//         //let val = a1 < a2 ? arr1.shift() : arr2.shift();

//         output.push(val);
//     }

//     return output; 
// }


let mergeSortedArrays = (arr1, arr2) => {

    let output = [];

    while (arr1.length > 0 && arr2.length > 0) {

        let val = arr1[0] < arr2[0] ? arr1.shift() : arr2.shift();
        output.push(val);
        
    }

    output = output.concat(arr1).concat(arr2);

    return output; 
}


const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

let result = mergeSortedArrays(myArray, alicesArray)
console.log(result);