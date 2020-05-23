

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    //check the length first
    let map = {};

    magazine.split('').forEach(x => {
        if (map[x] === undefined) {
            map[x] = 1;
        }
        else {
            map[x] += 1;
        }
    });

    for (let x of ransomNote.split('')) {
        if (map[x] === undefined || map[x] <= 0) {
            return false;
        }
        map[x] -= 1;
    }
    return true; 
};

// var canConstruct = function(ransomNote, magazine) {
//     if(ransomNote.length > magazine.length) return false;
//     let ransomNoteArr = ransomNote.split('');
//     let oldMagazineLength = magazine.length;
    
//     ransomNoteArr.forEach(item => {
//         magazine = magazine.replace(item, '');
//     })
    
//     if(oldMagazineLength == magazine.length + ransomNote.length){
//         return true;
//     } else {
//         return false;
//     }
// };



let x = canConstruct("a", "b") //false
console.log(x);

let y = canConstruct("aa", "ab") // false
console.log(y);

let z = canConstruct("aa", "aab") // true
console.log(z);