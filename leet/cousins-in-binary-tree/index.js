/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {

    var queue = []
    let depth = 0;
    queue.push(root)
    let parent = root;

    let xParent = null;

    while (queue.length !== 0) {
        for (let i = 0; i < queue.length; i++) {
            
            var node = queue.shift()

            if (node.val === x) {
                xParent = parent;
            }

            if (node.val === x) {
                xParent = parent;
            }

            if (node.left) {
                queue.push(tree[node.left])
            }
            if (node.right) {
                queue.push(tree[node.right])
            }

            parent = node;
        }
    }

    // let xParent = null;
    // let yParent = null;

    // let parent = root; 

    // let left = root.left;
    // let right = root.right;


    // while (left !== undefined && right !== undefined) {
    //     let lVal = left.val; 
    //     let rVal = right.val; 
    // }

    // for (let i = 0;; i++) {
        
    //     let left = parent.left;
    //     let right = parent.right; 

    //     if (left !== undefined) {
    //         let val = left.val;
    //         if (val === x) {

    //         }
    //     }
        
    // }
    
};