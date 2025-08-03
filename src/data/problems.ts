export interface Problem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  examples: Example[];
  constraints: string[];
  solutions: Solution[];
}

export interface Example {
  input: string;
  output: string;
  explanation?: string;
}

export interface Solution {
  approach: string;
  code: string;
  timeComplexity: string;
  spaceComplexity: string;
  explanation: string;
}

export const problems: Problem[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 6, we return [0, 1]."
      }
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists."
    ],
    solutions: [
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
        explanation: "We use a hash map to store each number and its index. For each number, we check if its complement (target - current number) exists in the map. If found, we return the indices. This approach trades space for time, giving us O(n) time complexity."
      },
      {
        approach: "Brute Force Approach",
        code: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        for (int i = 0; i < nums.size(); i++) {
            for (int j = i + 1; j < nums.size(); j++) {
                if (nums[i] + nums[j] == target) {
                    return {i, j};
                }
            }
        }
        return {}; // No solution found
    }
};`,
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        explanation: "We use two nested loops to check every possible pair of numbers. This is the most straightforward approach but has quadratic time complexity."
      }
    ]
  }
];

export const getProblemById = (id: number): Problem | undefined => {
  return problems.find(problem => problem.id === id);
};

export const getAllProblems = (): Problem[] => {
  return problems;
}; 