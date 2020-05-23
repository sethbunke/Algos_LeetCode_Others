/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

    let hash = {};
    let arr = s.split('');

    arr.forEach(x => hash[x] = hash[x] === undefined ? 1 : hash[x] + 1);

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        if (hash[val] === 1) {
            return i;
        }
    }
    return -1
};


//let s = "leetcode";
let s = "lleettxcode";
let result = firstUniqChar(s);

console.log(result);

// s = "loveleetcode",
// return 2.




// /**
//  * @param {string} s
//  * @return {number}
//  */
// var firstUniqChar = function(s) {
//     if(!s) return -1;
//     const uniq = new Map();
//     const dupes = new Map();
//     let cnt = 0;
//     for(const c of s){
//         if(dupes.has(c)){
//             uniq.delete(c)
//         }else{
//             uniq.set(c,cnt);
//             dupes.set(c,cnt);
//         }
//         cnt++;
//     }
//     return uniq.size === 0 ? -1 : uniq.values().next().value;
// };