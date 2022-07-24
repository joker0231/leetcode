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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = []
    if(!root){
        return result
    }
    let q = []
    q.push(root)
    while(q.length !== 0){
        let levellength = q.length
        result.push([])
        for(let i = 0;i<levellength;i++){
            let node = q.shift()
            result[result.length-1].push(node.val)
            if(node.left){q.push(node.left)}
            if(node.right){q.push(node.right)}

        }
    }
    return result
};