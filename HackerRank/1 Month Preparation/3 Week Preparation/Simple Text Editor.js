/**Implement a simple text editor. The editor initially contains an empty string, . Perform  operations of the following  types:

append - Append string  to the end of .
delete - Delete the last  characters of .
print - Print the  character of .
undo - Undo the last (not previously undone) operation of type  or , reverting  to the state it was in prior to that operation.
Example



operation
index   S       ops[index]  explanation
-----   ------  ----------  -----------
0       abcde   1 fg        append fg
1       abcdefg 3 6         print the 6th letter - f
2       abcdefg 2 5         delete the last 5 letters
3       ab      4           undo the last operation, index 2
4       abcdefg 3 7         print the 7th characgter - g
5       abcdefg 4           undo the last operation, index 0
6       abcde   3 4         print the 4th character - d
The results should be printed as:

f
g
d */
function processData(input) {
    let inputArr = input.split("\n");
    let inputArrParsed = inputArr.map(line => line.trim().split(" "));

    let q = Number(inputArrParsed[0][0]);

    let s = "";          
    let history = [];    

    let i = 1;

    while (q > 0) {

        let op = inputArrParsed[i][0];

        if (op === "1") {
            history.push(s);
            s = s + inputArrParsed[i][1];     // FIX 1
        }

        if (op === "2") {
            history.push(s);
            let k = Number(inputArrParsed[i][1]);
            s = s.slice(0, s.length - k);     // FIX 2
        }

        if (op === "3") {
            let k = Number(inputArrParsed[i][1]);
            console.log(s[k - 1]);            // FIX 3
        }

        if (op === "4") {
            s = history.pop();
        }

        i++;
        q--;
    }
}
// Example usage:
let input = `8
1 abcde
1 fg
3 6
2 5
4
3 7
4
3 4`;
processData(input);
/**Expected Output:
f
g
d
*/
