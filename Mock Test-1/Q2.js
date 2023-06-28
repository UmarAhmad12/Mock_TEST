/*
Q2. First Unique Character in a String

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1

Constraints:
a. 1 <= s.length <= 10^5
b. s consists of only lowercase English letters.
*/

function firstUniqChar(s) {
    const frequencyMap = new Map();

    // Count the frequency of each character
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    // Find the first non-repeating character
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (frequencyMap.get(char) === 1) {
            return i;
        }
    }

    return -1; // No non-repeating character found
}

const results = firstUniqChar("loveleetcode");
console.log(results);