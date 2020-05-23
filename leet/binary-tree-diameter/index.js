/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// var treeDiameter = function(root) {
//     let DandH = [0, 0];

//     if (root != null) { 

//         let leftResult = treeDiameter(root.left);
//         let rightResult = treeDiameter(root.right);

//         let height = Math.max(leftResult[0], rightResult[0]) + 1;
// 	    let leftDiameter = leftResult[1];
// 		let rightDiameter = rightResult[1];
// 	    let rootDiameter = leftResult[0] + rightResult[0] + 1;
// 		let finalDiameter = Math.max(rootDiameter, Math.max(leftDiameter, rightDiameter))
// 		// prepare the DandH[]
// 		DandH[0] = height; // update the height
// 		DandH[1] = finalDiameter;
// 		return DandH;
//     }

//     return DandH;
// };

const countDiameter = root => {
    if (!root) return 0;
  
    return 1 + Math.max(countDiameter(root.left), countDiameter(root.right));
  };
  
  /**
   * @param {TreeNode} root
   * @returns {number}
   */
  const diameterOfBinaryTree = root => {
    if (!root) return 0;
  
    const center = countDiameter(root.left) + countDiameter(root.right);
    const left = diameterOfBinaryTree(root.left);
    const right = diameterOfBinaryTree(root.right);
  
    return Math.max(center, left, right);
  };

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.right.left = new TreeNode(6);
root.left.right.left.right = new TreeNode(7);
root.left.left.left = new TreeNode(8);

// var diameterOfBinaryTree = function(root) {
//     return treeDiameter(root)[1];
// };

let result = diameterOfBinaryTree(root);

console.log(result);
