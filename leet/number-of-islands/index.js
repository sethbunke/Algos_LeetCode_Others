/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    let count = 0;
    
    for (let x = 0; i < grid.length; x++) {
        for (let y = 0; y < grid[x].length; y++) {
            if (grid[x][y] === '1') {
                count++;
            }

        }
    }
    
};