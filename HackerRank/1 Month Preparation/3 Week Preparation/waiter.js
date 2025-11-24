/*You are a waiter at a party. There is a pile of numbered plates. Create an empty  array. At each iteration, , remove each plate from the top of the stack in order. Determine if the number on the plate is evenly divisible by the  prime number. If it is, stack it in pile . Otherwise, stack it in stack . Store the values in  from top to bottom in . In the next iteration, do the same with the values in stack . Once the required number of iterations is complete, store the remaining values in  in , again from top to bottom. Return the  array.

Example



An abbreviated list of primes is . Stack the plates in reverse order.



Begin iterations. On the first iteration, check if items are divisible by .


Move  elements to .


On the second iteration, test if  elements are divisible by .


Move  elmements to .


And on the third iteration, test if  elements are divisible by .


Move  elmements to .


All iterations are complete, so move the remaining elements in , from top to bottom, to .

. Return this list.

Function Description

Complete the waiter function in the editor below.

waiter has the following parameters:

int number[n]: the numbers on the plates
int q: the number of iterations
Returns

int[n]: the numbers on the plates after processing*/


