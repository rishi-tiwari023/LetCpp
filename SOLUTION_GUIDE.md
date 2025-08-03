# Solution Guide - Adding New Problem Solutions

This guide explains how to add solutions for new LeetCode problems using the dynamic routing system.

## How It Works

The system uses dynamic routing where any problem number can be accessed via `/problem/{number}` (e.g., `/problem/564`). When you visit a problem page, the system:

1. Fetches problem data from LeetCode API
2. Looks for a custom solution file in `src/solutions/{problemNumber}.ts`
3. If found, displays your custom solutions
4. If not found, shows fallback solutions

## Adding a New Problem Solution

### Step 1: Create the Solution File

Create a new file in `src/solutions/` with the problem number as the filename:

```bash
# For problem 564
touch src/solutions/564.ts

# For problem 1
touch src/solutions/1.ts
```

### Step 2: Use the Template Structure

Copy the template from `src/solutions/template.ts` and modify it:

```typescript
import { Solution } from "../types/problem";

export const problem564Solutions: Solution[] = [
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

// Export as default as well
export default problem564Solutions;
```

### Step 3: Access Your Solution

Once you create the file, you can immediately access it at:
```
http://localhost:3000/problem/564
```

## File Naming Convention

- **Filename**: `{problemNumber}.ts` (e.g., `564.ts`, `1.ts`, `42.ts`)
- **Export name**: `problem{problemNumber}Solutions` (e.g., `problem564Solutions`)
- **Default export**: Also export as `default` for flexibility

## Solution Object Structure

Each solution should have these properties:

```typescript
{
  approach: string,        // Name of your approach (e.g., "Hash Map", "Two Pointers")
  code: string,           // Your C++ code as a string
  timeComplexity: string, // Time complexity (e.g., "O(n)", "O(n²)")
  spaceComplexity: string, // Space complexity (e.g., "O(1)", "O(n)")
  explanation: string     // Brief explanation of your approach
}
```

## Example: Problem 564

See `src/solutions/564.ts` for a complete example with multiple approaches.

## Benefits

1. **Dynamic Routing**: Any problem number works automatically
2. **Template System**: Consistent structure across all solutions
3. **Multiple Approaches**: Add several solutions per problem
4. **Immediate Access**: No need to update routing or other files
5. **Fallback Support**: Shows default solutions if custom ones aren't found

## Troubleshooting

- **Solution not showing**: Check that the export name matches `problem{number}Solutions`
- **Syntax errors**: Ensure your TypeScript code is valid
- **File not found**: Verify the filename matches the problem number exactly
- **C++ code formatting**: Use template literals (backticks) for multi-line code

## Quick Start

1. Copy `src/solutions/template.ts`
2. Rename to your problem number (e.g., `564.ts`)
3. Update the export name and solutions array
4. Add your C++ code
5. Visit `/problem/{number}` to see your solution 