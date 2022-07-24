/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//给你一个二叉树的根节点 root ， 检查它是否轴对称。
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let root1 = root.left
    let root2 = root.right
    return isSymmetricTree(root1,root2)
};

let isSymmetricTree = function(root1,root2) {
    if(!root1 && !root2){
        return true
    }else if(!root1 || !root2){
        return false
    }else if(root1.val != root2.val){
        return false
    }else{
        return isSymmetricTree(root1.left,root2.right) && isSymmetricTree(root1.right,root2.left)
    }
}