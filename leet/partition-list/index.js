/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {

    let lessThan = null;
    let greaterThan = null;

    //greater than head

    while(head.next) {
        if (head.val < x) {
            if (lessThan === null) {
                lessThan = head;
            }
            else {
                lessThan.next = head;
                lessThan = lessThan.next;
            }
        }
        else if (head.val > x) {
            if (greaterThan === null) {
                greaterThan = head;
            }
            else {
                greaterThan.next = head;
                greaterThan = greaterThan.next;
            }
        }

        head = head.next;
    }    
    let output = lessThan.next = greaterThan
};


let five = new ListNode(5);
let four = new ListNode(8);
let three = new ListNode(3);
let two = new ListNode(7);
let head = new ListNode(10);

head.next = two;
two.next = three;
three.next = four;
four.next = five;