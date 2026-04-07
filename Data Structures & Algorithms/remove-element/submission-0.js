class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        // make copy
        let indexOfVal = null

        // function for checking if arr has val
        function doesNumsHaveVal() {
            let numsHasVal = false
            
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] === val) {
                    numsHasVal = true
                    indexOfVal = i
                    break
                }
            }

            return numsHasVal
        }

        // function for removing val and returning new arr
        function removeFirstVal() {
            for (let i = indexOfVal; i < nums.length - 1; i++) {
                nums[i] = nums[i + 1]
            }
            // pop
            nums.pop()
        }

        // while copy array has val keep removing val
        while(doesNumsHaveVal() === true) {
            removeFirstVal()
        }

        // return k
        return nums.length

    }
}
