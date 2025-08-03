export interface Problem {
  id: number;
  title: string;
  titleSlug: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  examples: Example[];
  constraints: string[];
  solutions: Solution[];
  topicTags: string[];
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

export interface ProblemMetadata {
  id: number;
  title: string;
  titleSlug: string;
  difficulty: "Easy" | "Medium" | "Hard";
  topicTags: string[];
}
