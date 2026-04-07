class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0;
        let current = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                current++;
            } else if (nums[i] === 0) {
                if (current > 0) {
                    if (current > max) {
                        max = current;
                    }
                    current = 0;
                }
            }
        };

        if (current > max) {
            max = current;
            current = 0;
        };

        return max
    }
}
