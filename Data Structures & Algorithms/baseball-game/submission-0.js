class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const scores = []
        
        for (let i = 0; i < operations.length; i++) {
            let operation = operations[i]
            if (operation === '+') {
                scores.push(scores[scores.length - 1] + scores[scores.length - 2])
            } else if (operation === "D") {
                scores.push(scores[scores.length - 1] * 2)
            } else if (operation === "C") {
                scores.pop()
            } else {
                scores.push(Number(operation))
            }
        }

        return scores.reduce((acc, ele) => acc + ele, 0)
    }
}
