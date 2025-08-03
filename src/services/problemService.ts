import { Problem, ProblemMetadata } from "../types/problem";
// Removed leetcodeApi import
import { loadSolutions, getFallbackSolutions } from "./solutionLoader";
import { getProblemById } from "../data/problemRegistry";

export class ProblemService {
  private static cache = new Map<number, Problem>();

  static async getProblem(problemId: number): Promise<Problem | null> {
    // Check cache first
    if (this.cache.has(problemId)) {
      return this.cache.get(problemId)!;
    }

    // Get problem metadata
    const metadata = getProblemById(problemId);
    if (!metadata) {
      return null;
    }

    // Only use local metadata and solutions
    const solutions = await loadSolutions(problemId);
    const problem: Problem = {
      ...metadata,
      description: `Problem ${problemId}: ${metadata.title}`,
      examples: [],
      constraints: [],
      solutions:
        solutions.length > 0 ? solutions : getFallbackSolutions(problemId),
    };
    this.cache.set(problemId, problem);
    return problem;
  }

  private static cleanHtmlContent(content: string): string {
    // Remove HTML tags and clean up the content
    return content
      .replace(/<[^>]*>/g, "") // Remove HTML tags
      .replace(/&nbsp;/g, " ") // Replace &nbsp; with space
      .replace(/&lt;/g, "<") // Replace &lt; with <
      .replace(/&gt;/g, ">") // Replace &gt; with >
      .replace(/&amp;/g, "&") // Replace &amp; with &
      .trim();
  }

  static clearCache(): void {
    this.cache.clear();
  }

  static getCachedProblem(problemId: number): Problem | undefined {
    return this.cache.get(problemId);
  }
}
