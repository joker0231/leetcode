/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let node = new ListNode()
    let pre = node
    let carry = 0
    while(l1 || l2){
        const x = l1 ? l1.val : 0
        const y = l2 ? l2.val : 0
        let sum = x + y + carry
        if(sum>=10){
            carry = 1
            sum = sum - 10
        }else{
            carry = 0
        }
        pre.next = new ListNode(sum)
        pre = pre.next
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
    }
    if(carry == 1)pre.next = new ListNode(carry)
    return node.next
};

