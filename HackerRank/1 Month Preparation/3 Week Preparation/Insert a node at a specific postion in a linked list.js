/**Given the pointer to the head node of a linked list and an integer to insert at a certain position, create a new node with the given integer as its  attribute, insert this node at the desired position and return the head node.

A position of 0 indicates head, a position of 1 indicates one node away from the head and so on. The head pointer given may be null meaning that the initial list is empty.

Example
 refers to the first node in the list 


Insert a node at position  with . The new list is 

Function Description Complete the function insertNodeAtPosition in the editor below. It must return a reference to the head node of your finished list.

insertNodeAtPosition has the following parameters:

head: a SinglyLinkedListNode pointer to the head of the list
data: an integer value to insert as data in your new node
position: an integer position to insert the new node, zero based indexing
Returns

SinglyLinkedListNode pointer: a reference to the head of the revised list
Input Format

The first line contains an integer , the number of elements in the linked list.
Each of the next  lines contains an integer SinglyLinkedListNode[i].data.
The next line contains an integer , the data of the node that is to be inserted.
The last line contains an integer . */

function insertNodeAtPosition(head, data, position) {
    // Crear el nuevo nodo
    const newNode = { data: data, next: null };

    // Caso: insertar en la cabeza
    if (position === 0) {
        newNode.next = head;
        return newNode;
    }

    // Recorrer hasta llegar al nodo anterior a la posicion deseada
    let current = head;
    let index = 0;

    while (index < position - 1) {
        current = current.next;
        index++;
    }

    // Insertar el nuevo nodo
    newNode.next = current.next;
    current.next = newNode;

    return head;
}

// Ejemplo de uso:
let head = { data: 16, next: { data: 13, next: { data: 7, next: null } } };
head = insertNodeAtPosition(head, 1, 2);
console.log(JSON.stringify(head)); // Muestra la lista actualizada