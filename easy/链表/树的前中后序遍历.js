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
 * @return {number[]}
 */
var preorderTraversal = function(root) {//前序遍历
    let result = []
    let inorder = (root) => {
        if(!root){
            return
        }
        result.push(root.val)
        inorder(root.left)
        inorder(root.right)
        //中和后序只需要调整这三行代码的顺序
    }
    inorder(root)
    return result
};