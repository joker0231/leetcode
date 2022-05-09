/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

 var myreverse = function(head,tail) {
    let pre = tail.next
    let p = head
    while(pre !== tail){
       const nex = p.next
       p.next = pre
       pre = p
       p = nex
    }
    return [tail,head]
}

var reverseKGroup = function(head, k) {
    const hair = new ListNode(0)
    hair.next = head
    let pre = hair
    while(head){
        let tail = pre
        for (let i = 0; i < k; ++i) {
             tail = tail.next;
             if (!tail) {
                 return hair.next;
             }
         }
         const nex = tail.next;//不知道为什么一定要加分号
         [head,tail] = myreverse(head,tail)
         pre.next = head
         tail.next = nex
         pre = tail
         head = tail.next
    }
    return hair.next
};