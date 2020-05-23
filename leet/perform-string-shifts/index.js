function ListNode(val) {
    this.val = val;
    this.next = null;
    this.prev = null; 
}

/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
    let length = s.length;
    let node = createNodes(s);

    for(let i = 0; i < shift.length; i++) {
        let direction = shift[i][0];
        let count = shift[i][1];

        for (let j = 0; j < count; j++) {
            if (direction === 0) {
                node = node.next;
            }
            else {
                node = node.prev;
            }
        }
    }

    let output = [];

    for (let i = 0; i < length; i++) {
        let val = node.val;
        output.push(val);
        node = node.next;
    }
    return output.join(''); 
};

let createNodes = s => {
    let chars = s.split('');

    let head = null;
    let ptr = null;

    for(let i = 0; i < chars.length; i++) {
        let newNode = new ListNode(chars[i]);
        if (head === null) {
            head = newNode;
            ptr = head;
        }
        else {
            ptr.next = newNode;
            newNode.prev = ptr;
            ptr = newNode;
        }

        if (i === (chars.length - 1)) {
            newNode.next = head;
            head.prev = newNode;
        }
    }   
    return head; 
}

let s = "abc", shift = [[0,1],[1,2]];

let result = stringShift(s, shift);

console.log(result)
