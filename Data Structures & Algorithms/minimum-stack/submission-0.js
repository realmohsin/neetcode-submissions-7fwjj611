class MinStack {
    constructor() {
        this.min = null
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.min === null || this.min > val) this.min = val
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        const popped = this.stack.pop()
        if (popped === this.min) {
            if (this.stack.length === 0) {
                this.min = null
            } else {
                this.min = Math.min(...this.stack)
            }
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min
    }
}
