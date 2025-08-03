import { Solution } from "../types/problem";

// Template for creating new problem solutions
// Copy this file and rename it to the problem number (e.g., 564.ts)
// Then replace the solutions array with your actual solutions

export const problemTemplateSolutions: Solution[] = [
  {
    approach: "Your Approach Name",
    code: `// Your C++ solution code here
class Solution {
public:
    // Your solution method
    void yourMethod() {
        // Implementation
    }
};`,
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    explanation: "Brief explanation of your approach and why it works.",
  },
  // You can add multiple solutions for the same problem
  {
    approach: "Alternative Approach",
    code: `// Alternative C++ solution
class Solution {
public:
    // Alternative implementation
    void alternativeMethod() {
        // Implementation
    }
};`,
    timeComplexity: "O(n²)",
    spaceComplexity: "O(n)",
    explanation: "Explanation of the alternative approach.",
  },
];

// Export as default as well for flexibility
export default problemTemplateSolutions;
