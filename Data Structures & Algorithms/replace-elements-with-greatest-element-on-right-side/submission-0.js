class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        // function findLargestEle
        function findLargestEle(subArr) {
            if (subArr.length === 1) return subArr[0]
            let max = subArr[0]
            for (let i = 1; i < subArr.length; i++) {
                if (subArr[i] > max) max = subArr[i]
            }
            return max
        }

        // iteration from first ele to second to last ele
        for (let i = 0; i < arr.length - 1; i++) {
            // replace curr ele with value of findLargestEle function
            arr[i] = findLargestEle(arr.slice(i + 1, arr.length))
        }

        // replace last element with -1
        arr[arr.length - 1] = -1

        return arr
    }
}
