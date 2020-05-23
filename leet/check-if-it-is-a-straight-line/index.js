/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let first = coordinates[0];
    let second = coordinates[1];

    let slope = getSlope(first[0], first[1], second[0], second[1]);
    let x = first[0];
    let y = first[1];
    let mx = slope * x;
    let b = y - mx; //slope intercept 

    for (let coor of coordinates) {
        let x1 = coor[0], y1 = coor[1];
        let calc = (x1 * slope) + b;
        let res = y1 === calc;
        if (!res) {
            return false;
        }
    }

    return true; 
};

let getSlope = (x1, y1, x2, y2) => {
    let m = (y2 - y1)/(x2 - x1)
    return m;
}


//let coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];

let coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]];

//let coordinates = [[-5,3],[0,-7]]

let result = checkStraightLine(coordinates)

//let x = getSlope(-5, 3, 0,-7);

console.log(result);