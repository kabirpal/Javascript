var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let charCount = {};

    // Count characters in the first string
    for (let char of s.toLowerCase()) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    console.log(charCount);

    // Subtract character counts based on the second string
    for (let char of t.toLowerCase()) {
        if (!charCount[char]) {
            return false; // If char is not found or count becomes negative
        }
        charCount[char]--;
    }

    return true; // If all counts are zero, it's an anagram
};

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("triangle", "integral")); // true
console.log(isAnagram("apple", "pale")); // false
