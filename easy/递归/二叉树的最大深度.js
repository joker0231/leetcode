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
 * @return {number}
 */
var maxDepth = function(root) {//广度优先
    let result = []
    if(!root){
        return 0
    }
    let q = []
    q.push(root)
    while(q.length!==0){
        let levellength = q.length
        result.push([])
        for(let i = 0;i<levellength;i++){
            let node = q.shift()
            result[result.length-1].push(node.val)
            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)
        }
    }
    return result.length
};

var maxDepth = function(root) {//递归 深度优先
    if(root === null) {
        return 0
    }
    let leftHeight = maxDepth(root.left);
    let rightHeight = maxDepth(root.right);
    return Math.max(leftHeight,rightHeight) + 1;
};