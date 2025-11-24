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

function waiter(number, q) {
    // Generate the first q primes
    const primes = [];
    let num = 2;
    while (primes.length < q) {
        if (isPrime(num)) primes.push(num);
        num++;
    }

    let A = [...number]; // initial stack (top is the end)
    let result = [];

    for (let i = 0; i < q; i++) {
        let prime = primes[i];

        let nextA = []; // new A stack after filtering
        let B = [];     // divisible plates stack

        // Process A as a stack: pop from the end
        while (A.length > 0) {
            let plate = A.pop();

            if (plate % prime === 0) {
                B.push(plate); // goes to B_i
            } else {
                nextA.push(plate); // goes to A_(i+1)
            }
        }

        // Add B plates to result in top-to-bottom order
        while (B.length > 0) {
            result.push(B.pop());
        }

        // Prepare for next iteration
        A = nextA;
    }

    // Finally push remaining plates in A (top to bottom)
    while (A.length > 0) {
        result.push(A.pop());
    }

    // *** PRINT each element on its own line for the judge ***
    result.forEach(x => console.log(x));

    // return in case the platform expects the return value too
    return result;
}

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
// Example usage:
// waiter([3, 4, 7, 6, 5], 2);
// Expected output:
// 4
// 6
// 3
// 7
// 5

