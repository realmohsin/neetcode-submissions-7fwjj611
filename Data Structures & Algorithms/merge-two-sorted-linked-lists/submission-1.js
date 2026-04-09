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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // 9 12 25
        // 7 9 12 15 25 81  

        // are these check absolutely necessary dbl check at end
        if (!list1 && !list2) return null
        if (!list1) return list2
        if (!list2) return list1

        const head = list1.val <= list2.val ? list1 : list2

        // two pointers
        let nodeToInsert = list1
        let leftOfInsertPointer = null
        let insertPointer = list2

        // loop while pointer to first list is not null
        while (nodeToInsert) {
            // move pointer of second list till ele pointed to by first list is less than ele of second list. 
            while (nodeToInsert.val > insertPointer.val) {
                if (insertPointer.next) {
                    leftOfInsertPointer = insertPointer
                    insertPointer = insertPointer.next
                } else {
                    insertPointer.next = nodeToInsert
                    return head
                }
            }
            // insert before the pointer
            // insert without losing head of first list
            if (leftOfInsertPointer) leftOfInsertPointer.next = nodeToInsert
            leftOfInsertPointer = nodeToInsert
            nodeToInsert = nodeToInsert.next
            leftOfInsertPointer.next = insertPointer
        }
        return head
    }
}
