var numJewelsInStones = function(J, S) {
    let jewels = {};
    let count = 0;
    
    for (jewel of J) {
        jewels[jewel] = true;
    }

    for (stone of S){
        if(jewels[stone]) {
            count++;
        }
    }
    return count; 
};


/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    // iterating through S
    // using indexOf in J
    const jSet = new Set(J)
    let counter = 0;
    for (let i = 0 ; i < S.length; i++) {
        if (jSet.has(S.charAt(i))) counter++;
    }
    return counter;
};

var numJewelsInStones = function(J, S) {
    let sArray = S.split('');
    let jArray = J.split('');
    let count = 0;
    sArray.forEach((s) => {
        jArray.forEach((j) => {
            if(s === j) {
                count++;
            }
        });
    });

    return count;
};


var numJewelsInStones = function(J, S) {
    let count = 0
  
    for (let i = 0; i < S.length; i += 1) {
      // if (J.includes(S[i])) {
        count += Number(J.includes(S[i]))
      // }
    }
    
    return count
  };