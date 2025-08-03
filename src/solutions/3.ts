import { Solution } from "../types/problem";

export const problem3Solutions: Solution[] = [
  {
    approach: "Sliding Window (Optimal)",
    code: `class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> seen;
        int maxLen = 0, start = 0;
        for (int end = 0; end < s.length(); ++end) {
            if (seen.count(s[end]) && seen[s[end]] >= start) {
                start = seen[s[end]] + 1;
            }
            seen[s[end]] = end;
            maxLen = max(maxLen, end - start + 1);
        }
        return maxLen;
    }
};`,
    timeComplexity: "O(N)",
    spaceComplexity: "O(K)",
    explanation:
      "We use a sliding window and a hash map to track the last seen index of each character. When a duplicate is found, we move the start of the window. This ensures each character is processed at most twice.",
  },
];

export default problem3Solutions;
