// /**
//  * @param {number} num
//  * @return {boolean}
//  */
// var isPerfectSquare = function(num) {

//     if (num === 1) {
//         return true;
//     }

//     let low = 1;
//     let high = num;

//     while (low <= high) {
//         let mid = Math.floor((high + low)/2);

//         let result = getBaseLog(mid, num);
//         result = parseFloat(result.toFixed(2));
//         if (result === 2.00) {
//             return true;
//         }

//         if (result > 2) {
//             low = mid + 1;
//         }
//         else {
//             high = mid - 1;
//         }
//     }
//     return false;
// };

var isPerfectSquare = function(num) {
    var left = 1;
    var right = num;
    
    while (left <= right) {
      var mid = Math.floor((left + right) / 2);
      var temp = mid * mid;
      
      if (temp === num) return true;
      else if (temp > num) right = mid - 1;
      else left = mid + 1;
    }
    return false;
  }


  var isPerfectSquare = function(num) {
    if (num <= 0) return false
    
    let i = 1
    
    while (i * i < num) i += 1
    
    return i * i === num
};

// const binarySearch = (array, target) => {
//     let startIndex = 0;
//     let endIndex = array.length - 1;
//     while(startIndex <= endIndex) {
//       let middleIndex = Math.floor((startIndex + endIndex) / 2);
//       if(target === array[middleIndex]) {
//         return console.log("Target was found at index " + middleIndex);
//       }
//       if(target > array[middleIndex]) {
//         console.log("Searching the right side of Array")
//         startIndex = middleIndex + 1;
//       }
//       if(target < array[middleIndex]) {
//         console.log("Searching the left side of array")
//         endIndex = middleIndex - 1;
//       }
//       else {
//         console.log("Not Found this loop iteration. Looping another iteration.")
//       }
//     }
    
//     console.log("Target value not found in array");
//   }




const binarySearch = (num) => {
    let startIndex = 0;
    let endIndex = num; 

    while(startIndex <= endIndex) {
      let middleIndex = Math.floor((startIndex + endIndex) / 2);

      let result = getBaseLog(middleIndex, num);

      if(result === 2) {
        return console.log("Target was found at index " + middleIndex);
      }
      if(result > 2) {
        console.log("Searching the right side of Array")
        startIndex = middleIndex + 1;
      }
      if(result < 2) {
        console.log("Searching the left side of array")
        endIndex = middleIndex - 1;
      }
      else {
        console.log("Not Found this loop iteration. Looping another iteration.")
      }
    }
    
    console.log("Target value not found in array");
  }


const arr = [...Array(10).keys()].map(x => ++x);

//Math.log()

let getBaseLog = (x, y) => Math.log(y) / Math.log(x);


//let result = binarySearch(101);

//let result = getBaseLog(5, 100);

let result = isPerfectSquare(9);

//if > 2 then too low
//if < 2 then too high

console.log(result);