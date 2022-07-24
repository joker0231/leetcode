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
var zigzagLevelOrder = function(root) {
    let result = []
    let isorder = true
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
            if(isorder){
                result[result.length-1].push(node.val)
            }else{
                result[result.length-1].unshift(node.val)
            }
            if(node.left){q.push(node.left)}
            if(node.right){q.push(node.right)}
        }
        isorder = !isorder
    }
    return result
};