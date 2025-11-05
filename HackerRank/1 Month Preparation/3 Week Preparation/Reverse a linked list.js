/** Given the pointer to the head node of a linked list, change the next pointers of the nodes so that their order is reversed. The head pointer given may be null meaning that the initial list is empty.

Example
 references the list 

Manipulate the  pointers of each node in place and return , now referencing the head of the list .

Function Description

Complete the reverse function in the editor below.

reverse has the following parameter:

SinglyLinkedListNode pointer head: a reference to the head of a list
Returns

SinglyLinkedListNode pointer: a reference to the head of the reversed list
Input Format

The first line contains an integer , the number of test cases.

Each test case has the following format:

The first line contains an integer , the number of elements in the linked list.
Each of the next  lines contains an integer, the  values of the elements in the linked list.*/
function reverse(llist) {
    // Write your code here
    let prev = null;
    let current = llist;

    while (current !== null) {
        let nextNode = current.next; // store next node
        current.next = prev;         // reverse pointer
        prev = current;              // move prev forward
        current = nextNode;          // move current forward
    }

    return prev; // new head
}
// example usage
console.log(reverse({
    data: 1,
    next: {
        data: 2,
        next: {
            data: 3,
            next: null
        }
    }
})); // should print the reversed list: {data: 3, next: {data: 2, next: {data: 1, next: null}}}