import { Solution } from "../types/problem";

// Example solution for LeetCode Problem 564: Find the Closest Palindrome
export const problem564Solutions: Solution[] = [
  {
    approach: "String Manipulation Approach",
    code: `class Solution {
public:
    string nearestPalindromic(string n) {
        long num = stol(n);
        
        // Handle edge cases
        if (num <= 10) return to_string(num - 1);
        if (num == 11) return "9";
        
        // Get the first half of the number
        string half = n.substr(0, (n.length() + 1) / 2);
        long halfNum = stol(half);
        
        vector<long> candidates;
        
        // Generate candidates
        for (int i = -1; i <= 1; i++) {
            long newHalf = halfNum + i;
            if (newHalf <= 0) continue;
            
            string newHalfStr = to_string(newHalf);
            string candidate;
            
            if (n.length() % 2 == 0) {
                // Even length: mirror the half
                candidate = newHalfStr + string(newHalfStr.rbegin(), newHalfStr.rend());
            } else {
                // Odd length: mirror the half except the last digit
                candidate = newHalfStr + string(newHalfStr.rbegin() + 1, newHalfStr.rend());
            }
            
            candidates.push_back(stol(candidate));
        }
        
        // Add 10^n - 1 and 10^n + 1 as candidates
        long power = pow(10, n.length() - 1);
        candidates.push_back(power - 1);
        candidates.push_back(power + 1);
        
        // Find the closest candidate
        long result = candidates[0];
        long minDiff = abs(candidates[0] - num);
        
        for (long candidate : candidates) {
            if (candidate == num) continue;
            
            long diff = abs(candidate - num);
            if (diff < minDiff || (diff == minDiff && candidate < result)) {
                minDiff = diff;
                result = candidate;
            }
        }
        
        return to_string(result);
    }
};`,
    timeComplexity: "O(log n)",
    spaceComplexity: "O(log n)",
    explanation:
      "This approach generates candidate palindromes by manipulating the first half of the number and mirroring it. We consider candidates from the previous, current, and next half numbers, plus edge cases like 10^n ± 1.",
  },
  {
    approach: "Brute Force with Optimization",
    code: `class Solution {
public:
    string nearestPalindromic(string n) {
        long num = stol(n);
        
        // Check if the number itself is a palindrome
        if (isPalindrome(n)) {
            // Find the next closest palindrome
            return findNextClosest(num);
        }
        
        // Find the closest palindrome
        long lower = findLowerPalindrome(num);
        long higher = findHigherPalindrome(num);
        
        if (num - lower <= higher - num) {
            return to_string(lower);
        } else {
            return to_string(higher);
        }
    }
    
private:
    bool isPalindrome(string s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            if (s[left] != s[right]) return false;
            left++;
            right--;
        }
        return true;
    }
    
    long findLowerPalindrome(long num) {
        while (num > 0) {
            num--;
            if (isPalindrome(to_string(num))) {
                return num;
            }
        }
        return 0;
    }
    
    long findHigherPalindrome(long num) {
        while (true) {
            num++;
            if (isPalindrome(to_string(num))) {
                return num;
            }
        }
    }
};`,
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    explanation:
      "A simpler approach that checks if the number is already a palindrome, then finds the nearest lower and higher palindromes by decrementing and incrementing respectively.",
  },
];

// Export as default as well
export default problem564Solutions;
