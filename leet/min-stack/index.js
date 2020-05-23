/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.data = [];
    this.minIndex = -1; 
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.data.push(x);
    if (this.minIndex === -1 || (this.getMin() > x)) {
        this.minIndex = this.data.length - 1;    
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let val = this.data.pop();
    if (this.minIndex > (this.data.length - 1)) {
        //find min
        let minIndex = 0;
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] < this.data[minIndex]) {
                minIndex = i; 
            }
        }
        this.minIndex = minIndex; 
    }
    return val; 
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.data.length === 0) { 
        return null; 
    }
    return this.data[this.data.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.data[this.minIndex];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());   //--> Returns -3.
minStack.pop();
console.log(minStack.top());      //--> Returns 0.
console.log(minStack.getMin());   //--> Returns -2.

console.log();