import { Solution } from "../types/problem";

export const problem1Solutions: Solution[] = [
  {
    approach: "Hash Map Approach",
    code: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> map;
        
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            
            if (map.find(complement) != map.end()) {
                return {map[complement], i};
            }
            
            map[nums[i]] = i;
        }
        
        return {}; // No solution found
    }
};`,
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    explanation: "",
  },
];

// Export as default as well
export default problem1Solutions;
