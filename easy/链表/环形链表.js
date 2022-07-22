/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//给你一个链表的头节点 head ，判断链表中是否有环。
//
// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。
//
// 如果链表中存在环 ，则返回 true 。 否则，返回 false 。

    
var detectCycle = function (head) {
    if (head === null || head.next === null) {
        return null
    }

    // 声明快慢指针
    let slow = head
    let fast = head

    while (fast !== null) {
        // 慢指针每次移动一位
        slow = slow.next

        if (fast.next === null) {
            // 如果满足条件，说明 fast 为尾部结点，不存在环
            return null
        }

        // 快指针每次移动两位
        fast = fast.next.next

        // 检测是否有环
        if (fast === slow) {
            // 找到环的起点位置
            let ptr = head

            // 因为 a===c，则ptr 和 slow 的交点就是环的起始节点
            while (ptr !== slow) {
                ptr = ptr.next
                slow = slow.next
            }
            return ptr
        }
    }

    // while 结束，说明 fast 为 null，说明链表没有环
    return null
};

var detectCycle = function(head) {
    const visited = new Set();

    while (head !== null) {
        if (visited.has(head)) {
            return head;
        }
        visited.add(head);
        head = head.next;
    }
    return null;
};
