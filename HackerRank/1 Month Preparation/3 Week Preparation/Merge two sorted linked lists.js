/**Given pointers to the heads of two sorted linked lists, merge them into a single, sorted linked list. Either head pointer may be null meaning that the corresponding list is empty.

Example
 refers to 
 refers to 

The new list is 

Function Description

Complete the mergeLists function in the editor below.

mergeLists has the following parameters:

SinglyLinkedListNode pointer headA: a reference to the head of a list
SinglyLinkedListNode pointer headB: a reference to the head of a list
Returns

SinglyLinkedListNode pointer: a reference to the head of the merged list
Input Format

The first line contains an integer , the number of test cases.

The format for each test case is as follows:

The first line contains an integer , the length of the first linked list.
The next  lines contain an integer each, the elements of the linked list.
The next line contains an integer , the length of the second linked list.
The next  lines contain an integer each, the elements of the second linked list.

Constraints */

function mergeLists(headA, headB) {
    // Si alguno es null, devolvemos el otro
    if (!headA) return headB;
    if (!headB) return headA;
    
    // Creamos un nodo dummy para facilitar el merge
    let dummy = { data: 0, next: null };
    let current = dummy;
    
    let a = headA;
    let b = headB;
    
    // Mientras ambos tengan nodos
    while (a !== null && b !== null) {
        if (a.data <= b.data) {
            current.next = a;
            a = a.next;
        } else {
            current.next = b;
            b = b.next;
        }
        current = current.next;
    }
    
    // Añadimos lo que quede en cualquiera
    if (a !== null) current.next = a;
    if (b !== null) current.next = b;
    
    // Devolvemos la lista desde el primer nodo real
    return dummy.next;
}
// Ejemplo de uso:
let listA = { data: 1, next: { data: 3, next: { data: 5, next: null } } };
let listB = { data: 2, next: { data: 4, next: { data: 6, next: null } } };
let mergedHead = mergeLists(listA, listB);
console.log(JSON.stringify(mergedHead)); // Muestra la lista fusionada