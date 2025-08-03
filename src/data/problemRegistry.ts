import { ProblemMetadata } from "../types/problem";

// Registry of all available problems
export const problemRegistry: ProblemMetadata[] = [
  {
    id: 1,
    title: "Two Sum",
    titleSlug: "two-sum",
    difficulty: "Easy",
    topicTags: ["Array", "Hash Table"],
  },
  {
    id: 2,
    title: "Add Two Numbers",
    titleSlug: "add-two-numbers",
    difficulty: "Medium",
    topicTags: ["Linked List", "Math", "Recursion"],
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    titleSlug: "longest-substring-without-repeating-characters",
    difficulty: "Medium",
    topicTags: ["Hash Table", "String", "Sliding Window"],
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    titleSlug: "median-of-two-sorted-arrays",
    difficulty: "Hard",
    topicTags: ["Array", "Binary Search", "Divide and Conquer"],
  },
  {
    id: 5,
    title: "Longest Palindromic Substring",
    titleSlug: "longest-palindromic-substring",
    difficulty: "Medium",
    topicTags: ["String", "Dynamic Programming"],
  },
  {
    id: 564,
    title: "Find the Closest Palindrome",
    titleSlug: "find-the-closest-palindrome",
    difficulty: "Hard",
    topicTags: ["String", "Math"],
  },
];

// Get problem by ID
export const getProblemById = (id: number): ProblemMetadata | undefined => {
  return problemRegistry.find((problem) => problem.id === id);
};

// Get problem by title slug
export const getProblemBySlug = (
  titleSlug: string
): ProblemMetadata | undefined => {
  return problemRegistry.find((problem) => problem.titleSlug === titleSlug);
};

// Get all problems
export const getAllProblems = (): ProblemMetadata[] => {
  return problemRegistry;
};

// Get problems by difficulty
export const getProblemsByDifficulty = (
  difficulty: "Easy" | "Medium" | "Hard"
): ProblemMetadata[] => {
  return problemRegistry.filter((problem) => problem.difficulty === difficulty);
};

// Search problems by title or tags
export const searchProblems = (query: string): ProblemMetadata[] => {
  const lowerQuery = query.toLowerCase();
  return problemRegistry.filter(
    (problem) =>
      problem.title.toLowerCase().includes(lowerQuery) ||
      problem.id.toString().includes(lowerQuery) ||
      problem.topicTags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
};
