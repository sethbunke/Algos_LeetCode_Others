/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {

        let i = 0, j = n, mid = 0;

        while (i < j) {
            mid = i + ((i - j)/2);
            if (isBadVersion(mid)) {
                i = mid + 1;
            }
            else {
                j = mid - 1;
            }

            if (!isBadVersion(mid)) {
                return mid + 1;
            }
        }

        return mid; 
    };
};

// public class Solution extends VersionControl {
//     public int firstBadVersion(int n) {
//         //if(isBadVersion(n)) return n;
//         int i=0, j =n, mid=0;
//         while(i<=j){
//             mid = i + (j-i) / 2;
//             if(!isBadVersion(mid)) i = mid+1;
//             else j = mid-1;
//         }
//         if(!isBadVersion(mid)) return mid+1;
//         return mid;
//     }
// }


let ibv = (x) => x === 4;


let ggg = ibv(5);

let badVersion = 4;

let result = solution(ibv(badVersion));

console.log(result);