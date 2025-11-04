function isValid(s) {
    // Step 1: Count how many times each letter appears
    let freq = new Map();

    for (let i = 0; i < s.length; i++) {
        let letra = s[i];
        if (freq.has(letra)) {
            freq.set(letra, freq.get(letra) + 1);
        } else {
            freq.set(letra, 1);
        }
    }

    // Step 2: Get only the frequency values
    let frecuencias = Array.from(freq.values());

    // Step 3: Count how many times each frequency appears
    let freqCount = new Map();

    for (let f of frecuencias) {
        if (freqCount.has(f)) {
            freqCount.set(f, freqCount.get(f) + 1);
        } else {
            freqCount.set(f, 1);
        }
    }

    // If all frequencies are equal -> valid
    if (freqCount.size === 1) {
        return "YES";
    }

    // If there are more than 2 different frequencies -> invalid
    if (freqCount.size > 2) {
        return "NO";
    }

    // Step 4: Analyze the case with 2 different frequencies
    let entries = Array.from(freqCount.entries());
    // Example: [[1, 1], [2, 4]]  -> frequency 1 appears once, frequency 2 appears 4 times

    let [f1, count1] = entries[0];
    let [f2, count2] = entries[1];

    // Step 5: Check valid conditions
    if (
        // Case A: one frequency is 1 and appears only once (ex: [1,2,2])
        (f1 === 1 && count1 === 1) ||
        (f2 === 1 && count2 === 1)
    ) {
        return "YES";
    }

    // Case B: one frequency is greater by 1 and appears only once
    if (
        (Math.abs(f1 - f2) === 1) &&
        ((f1 > f2 && count1 === 1) || (f2 > f1 && count2 === 1))
    ) {
        return "YES";
    }

    // Otherwise -> invalid
    return "NO";
}
// example usage:
console.log(isValid("aabbccddeefghi")); // Output: NO
