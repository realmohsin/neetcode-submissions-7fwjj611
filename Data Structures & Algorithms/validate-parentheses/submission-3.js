class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const mapping = {
            '(': ')',
            '[': ']',
            '{': '}'
        }
        // turn s into array
        const sArr = [...s]
        // create validation stack
        const stack = []
        // iterate backwards through array
        for (let i = sArr.length - 1; i >= 0; i--) {
            const brace = sArr[i]
            if (brace in mapping) {
                // if nothing in stack return false
                if (stack.length === 0) return false
                // pop if opening
                const closingBrace = stack.pop()
                // if doesn't match we return false
                if (closingBrace !== mapping[brace]) return false    
            } else {
                // push to stack if closing
                stack.push(brace)    
            }
        }
        // if validation stack is not empty then return false
        if (stack.length) return false
        // return true        
        return true
    }
}
