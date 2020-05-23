/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let pivot = findPivot(nums);

    //look at value at pivot to see if we do the binary search the left or the right

};

let findPivot = arr => {
    if (arr[0] <= arr[arr.length - 1]) {
        return 0;
    }

    let start = 0; 
    let end = arr.length - 1;

    while (start <= end) {
        let mid = (start + end)/2;

        if ((mid < arr.length - 1) && (arr[mid] > arr[mid+1])) {
            return mid + 1; //found the pivot - it is the next value; it is greater than mid
        }
        else if (arr[start] <= arr[mid]) { // start to mid is sorted, pivot in second half
            start = mid + 1;    
        }
        else {
            end = mid - 1; //look at the left portion
        }
    }
    return 0; 
}


let nums = [4,5,6,7,0,1,2], target = 0;

//let result = search(nums, target);

let result = findPivot(nums);

console.log(result);

