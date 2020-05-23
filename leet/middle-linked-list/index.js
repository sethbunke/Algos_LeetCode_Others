/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var middleNode = function(head) {

    let p1 = head;
    let p2 = head;

    while ((p2 !== null) && (p2.next !== null)) {
        p1 = p1.next;
        p2 = p2.next.next;
    }
    
    return p1; 
};


let input = [1,2,3,4,5];

let five = new ListNode(5);
let four = new ListNode(4);
let three = new ListNode(3);
let two = new ListNode(2);
let head = new ListNode(1);

head.next = two;
two.next = three;
three.next = four;
four.next = five;


let result = middleNode(head);

console.log(result);
