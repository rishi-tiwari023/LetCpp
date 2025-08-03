import { Solution } from "../types/problem";

// Dynamic solution loader
export const loadSolutions = async (problemId: number): Promise<Solution[]> => {
  try {
    // Try to load the solution file directly by problem number
    const module = await import(`../solutions/${problemId}.ts`);

    // The solution file should export an array named `problem${problemId}Solutions` or default
    const solutions = module[`problem${problemId}Solutions`] || module.default;

    if (Array.isArray(solutions)) {
      return solutions;
    }

    throw new Error(`Invalid solution format for problem ${problemId}`);
  } catch (error) {
    console.error(`Error loading solutions for problem ${problemId}:`, error);
    return [];
  }
};

// Fallback solutions for when dynamic loading fails
export const getFallbackSolutions = (problemId: number): Solution[] => {
  const fallbackSolutions: { [key: number]: Solution[] } = {
    // Add fallback solutions for problems that don't have custom solution files
    // For now, we'll return empty array and let the system handle it
  };

  return fallbackSolutions[problemId] || [];
};
