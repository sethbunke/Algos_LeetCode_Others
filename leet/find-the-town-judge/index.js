/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    let map = {};

    [...Array(N).keys()].map(x => ++x).forEach(x => {
        map[x] = { trusts: [], trusted_by: [] };
    });

    for (const pair of trust) {
        let truster = pair[0];
        let trustee = pair[1];
        map[truster].trusts.push(trustee);
        map[trustee].trusted_by.push(truster);
    }

    for (const property in map) {
        let trusts = map[property].trusts.length;
        let trusted_by = map[property].trusted_by.length;
        if ((trusted_by === N - 1) && trusts === 0) {
            return property; 
        }
    }

    return -1; 
};



let N = 3, trust = [[1,3],[2,3]]

let result1 = findJudge(N, trust);

