/*Given the pointer to the head node of a doubly linked list, reverse the order of the nodes in place. That is, change the next and prev pointers of the nodes so that the direction of the list is reversed. Return a reference to the head node of the reversed list.

Note: The head node might be NULL to indicate that the list is empty.

Function Description

Complete the reverse function in the editor below.

reverse has the following parameter(s):

DoublyLinkedListNode head: a reference to the head of a DoublyLinkedList
Returns
- DoublyLinkedListNode: a reference to the head of the reversed list

Input Format

The first line contains an integer , the number of test cases.

Each test case is of the following format:

The first line contains an integer , the number of elements in the linked list.
The next  lines contain an integer each denoting an element of the linked list. */
function reverse(head) {
    let current = head;
    let temp = null;
    // Swap next and prev for each node
    while (current !== null) {
        // Swap next and prev
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        // Move to the next node in the original list
        current = current.prev;
    }
    // After the loop, temp will be at the node before null, which is the new head
    return temp ? temp.prev : null;
}
// example usage
console.log(reverse({
    data: 1,
    next: {
        data: 2,
        prev: { data: 1, next: null, prev: null },
        next: {
            data: 3,
            prev: { data: 2, next: null, prev: null },
            next: null
        }
    }
}));; // should print the reversed list with proper next and prev pointers

/*Compiler Message
Wrong Answer
Input (stdin)
47
28
10
87
49
18
70
34
60
75
87
24
74
96
26
35
79
45
70
32{-truncated-}
Expected Output
13 48 96 21 100 98 29 76 93 62 32 70 45 79 35 26 96 74 24 87 75 60 34 70 18 49 87 10 
42 14 93 93 14 94 81 25 20 28 61 1 31 37 11 16 4 64 26 36 65 31 88 17 34 68 49 81 61 60 97 98 1 47 12 38 23 2 65 20 98 73 91 64 81 95 91 69 48 43 97 97 46 69 69 54 8 38 33 12 59 99 86 12 25 11 74 51 52 41 30 35 40 44 
88 58 27 61 23 50 48 75 69 7 97 90 4 16 95 64 72 30 53 78 87 56 82 1 48 97 56 46 84 31 18 76 83 78 13 49 30 42 27 27 52 30 96 41 44 13 60 43 92 46 97 87 9 86 46 50 62 73 29 57 49 89 64 83 97 20 70 3 39 46 32 60 86 32 30 50 22 15 47 6 38 12 42 7 73 73 22 54 73 
95 13 48 33 15 66 100 68 13 6 29 93 11 36 70 72 93 31 15 15 71 92 66 23 18 98 17 70 57 62 55 63 99 31 81 95 2 95 40 20 43 41 24 88 
3 75 
74 9 36 60 92 36 40 80 79 12 87 69 25 18 46 32 36 32 66 66 40 100 91 
10 68 40 24 100 16 7 3 32 20 72 67 55 32 16 12 10 14 86 56 
43 41 98 
90 77 71 18 24 88 33 30 95 83 28 34 64 89 11 65 22 53 63 38 82 92 72 76 9 5 64 100 92 27 92 21 2 84 
44 70 31 80 97 27 65 60 94 74 37 67 14 81 3 
39 39 3 45 81 77 75 9 84 87 84 73 7{-truncated-}
*/
