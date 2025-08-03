import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ProblemService } from "../services/problemService";
import { Problem } from "../types/problem";
import CodeBlock from "../components/CodeBlock";
import {
  loadSolutions,
  getFallbackSolutions,
} from "../services/solutionLoader";

const ProblemDetail: React.FC = () => {
  const { id, problemNumber } = useParams<{
    id?: string;
    problemNumber?: string;
  }>();
  const [selectedSolution, setSelectedSolution] = useState(0);
  const [problem, setProblem] = useState<Problem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Use problemNumber if available, otherwise fall back to id
  const currentProblemNumber = problemNumber || id;

  useEffect(() => {
    const loadProblem = async () => {
      if (!currentProblemNumber) return;

      try {
        setLoading(true);
        const problemData = await ProblemService.getProblem(
          Number(currentProblemNumber)
        );

        if (problemData) {
          // Try to load custom solutions for this problem
          let customSolutions = await loadSolutions(
            Number(currentProblemNumber)
          );

          // If no custom solutions found, use fallback or default solutions
          if (customSolutions.length === 0) {
            customSolutions = getFallbackSolutions(
              Number(currentProblemNumber)
            );
          }

          // Update problem with custom solutions if available
          if (customSolutions.length > 0) {
            problemData.solutions = customSolutions;
          }

          setProblem(problemData);
        }
        setError(null);
      } catch (err) {
        setError("Failed to load problem");
        console.error("Error loading problem:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProblem();
  }, [currentProblemNumber]);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="text-blue-600 text-6xl mb-4">⏳</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Loading problem...
        </h3>
        <p className="text-gray-600">Fetching data from LeetCode</p>
      </div>
    );
  }

  if (error || !problem) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">❌</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          {error || "Problem not found"}
        </h3>
        <p className="text-gray-600 mb-4">
          The problem you're looking for doesn't exist or couldn't be loaded.
        </p>
        <Link to="/" className="text-blue-600 hover:text-blue-700">
          ← Back to Problems
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-700 mb-4 inline-block"
        >
          ← Back to Problems
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold text-gray-900">
            #{problem.id}. {problem.title}
          </h1>
          <span
            className={`px-3 py-1 text-sm font-medium rounded-full ${
              problem.difficulty === "Easy"
                ? "bg-green-100 text-green-800"
                : problem.difficulty === "Medium"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {problem.difficulty}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Problem Description */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Problem Description
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 whitespace-pre-line">
                {problem.description}
              </p>
            </div>
          </div>

          {/* Examples */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Examples
            </h2>
            <div className="space-y-4">
              {problem.examples.map((example, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="mb-2">
                    <span className="font-medium text-gray-900">
                      Example {index + 1}:
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Input:</span>
                      <div className="bg-gray-50 p-2 rounded mt-1 font-mono">
                        {example.input}
                      </div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Output:</span>
                      <div className="bg-gray-50 p-2 rounded mt-1 font-mono">
                        {example.output}
                      </div>
                    </div>
                  </div>
                  {example.explanation && (
                    <div className="mt-3">
                      <span className="font-medium text-gray-700">
                        Explanation:
                      </span>
                      <p className="text-gray-600 mt-1">
                        {example.explanation}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Constraints */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Constraints
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {problem.constraints.map((constraint, index) => (
                <li key={index}>{constraint}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Solutions Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Solutions
            </h2>

            {/* Solution Tabs */}
            <div className="mb-4">
              {problem.solutions.map((solution, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSolution(index)}
                  className={`w-full text-left p-3 rounded-lg mb-2 transition-colors ${
                    selectedSolution === index
                      ? "bg-blue-100 text-blue-800 border border-blue-200"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <div className="font-medium">{solution.approach}</div>
                  <div className="text-sm mt-1">
                    Time: {solution.timeComplexity} | Space:{" "}
                    {solution.spaceComplexity}
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Solution */}
            <div className="border-t pt-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                {problem.solutions[selectedSolution].approach}
              </h3>
              <div className="text-sm text-gray-600 mb-4">
                {problem.solutions[selectedSolution].explanation}
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Time Complexity:</span>
                  <span className="font-mono font-medium">
                    {problem.solutions[selectedSolution].timeComplexity}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Space Complexity:</span>
                  <span className="font-mono font-medium">
                    {problem.solutions[selectedSolution].spaceComplexity}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Code Solution */}
      <div className="mt-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Solution: {problem.solutions[selectedSolution].approach}
          </h2>
          <CodeBlock code={problem.solutions[selectedSolution].code} />
        </div>
      </div>
    </div>
  );
};

export default ProblemDetail;
