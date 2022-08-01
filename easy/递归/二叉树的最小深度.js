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
//给定一个二叉树，找出其最小深度。
//
// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
//
// 说明：叶子节点是指没有子节点的节点。
var minDepth = function(root) {
    if(!root){
        return 0
    }
    const dfs = function(node,level) {
        if(!level){
            level = 1
        }
        if(node.left && node.right){
            return Math.min(
                dfs(node.left,level+1),dfs(node.right,level+1)
            )
        }
        else if(node.left){
            return dfs(node.left,level+1)
        }
        else if(node.right){
            return dfs(node.right,level+1)
        }
        else{
            return level
        }
    }
    return dfs(root,1)
};