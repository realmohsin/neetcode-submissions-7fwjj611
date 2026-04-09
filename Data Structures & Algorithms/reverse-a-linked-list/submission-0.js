/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        //    x x x x ... x x x x
        //  ^ ^ ^           ^ ^ ^

        let newNext = null
        let cur = head
        let oldNext = head?.next

        // loop whle cur is not null
        while (cur) {
            // set cur's next to newNext
            cur.next = newNext
            // shift pointers
            newNext = cur
            cur = oldNext
            oldNext = cur?.next
        }


        return newNext

    }
}
