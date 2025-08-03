interface LeetCodeProblem {
  questionId: string;
  title: string;
  titleSlug: string;
  difficulty: string;
  content: string;
  exampleTestcases: string;
  codeSnippets: Array<{
    lang: string;
    code: string;
  }>;
  topicTags: Array<{
    name: string;
  }>;
}

interface LeetCodeResponse {
  data: {
    question: LeetCodeProblem;
  };
}

const LEETCODE_API_URL = "https://leetcode.com/graphql";

const getProblemQuery = (titleSlug: string) => `
  query getQuestionDetail($titleSlug: String!) {
    question(titleSlug: $titleSlug) {
      questionId
      title
      titleSlug
      difficulty
      content
      exampleTestcases
      codeSnippets {
        lang
        code
      }
      topicTags {
        name
      }
    }
  }
`;

export const fetchProblemFromLeetCode = async (
  titleSlug: string
): Promise<LeetCodeProblem | null> => {
  try {
    const response = await fetch(LEETCODE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: getProblemQuery(titleSlug),
        variables: { titleSlug },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: LeetCodeResponse = await response.json();
    return data.data.question;
  } catch (error) {
    console.error("Error fetching problem from LeetCode:", error);
    return null;
  }
};

// Parse LeetCode content to extract examples and constraints
export const parseLeetCodeContent = (content: string) => {
  const examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }> = [];
  const constraints: string[] = [];

  // Extract examples (robust to HTML changes)
  // Try both old and new formats
  const exampleBlockRegex =
    /<strong>Example\s*\d+:<\/strong>[\s\S]*?<pre><code>([\s\S]*?)<\/code><\/pre>/g;
  let match;
  while ((match = exampleBlockRegex.exec(content)) !== null) {
    const exampleText = match[1].replace(/<[^>]*>/g, "").trim();
    // Try to extract Input, Output, Explanation
    const inputMatch = exampleText.match(/Input:\s*(.*)/);
    const outputMatch = exampleText.match(/Output:\s*(.*)/);
    const explanationMatch = exampleText.match(/Explanation:\s*(.*)/);
    const input = inputMatch ? inputMatch[1].trim() : "";
    const output = outputMatch ? outputMatch[1].trim() : "";
    const explanation = explanationMatch
      ? explanationMatch[1].trim()
      : undefined;
    examples.push({ input, output, explanation });
  }

  // Fallback: Try to extract examples from plaintext if HTML blocks not found
  if (examples.length === 0) {
    const plainExampleRegex = /Example\s*\d+:([\s\S]*?)(?=Example\s*\d+:|$)/g;
    let plainMatch;
    while ((plainMatch = plainExampleRegex.exec(content)) !== null) {
      const block = plainMatch[1];
      const inputMatch = block.match(/Input:\s*(.*)/);
      const outputMatch = block.match(/Output:\s*(.*)/);
      const explanationMatch = block.match(/Explanation:\s*(.*)/);
      const input = inputMatch ? inputMatch[1].trim() : "";
      const output = outputMatch ? outputMatch[1].trim() : "";
      const explanation = explanationMatch
        ? explanationMatch[1].trim()
        : undefined;
      examples.push({ input, output, explanation });
    }
  }

  // Extract constraints (robust to HTML changes)
  const constraintRegex =
    /<strong>Constraints:<\/strong>\s*<ul>([\s\S]*?)<\/ul>/s;
  const constraintMatch = content.match(constraintRegex);
  if (constraintMatch) {
    const constraintText = constraintMatch[1];
    const liRegex = /<li>([\s\S]*?)<\/li>/g;
    let liMatch;
    while ((liMatch = liRegex.exec(constraintText)) !== null) {
      constraints.push(liMatch[1].replace(/<[^>]*>/g, "").trim());
    }
  } else {
    // Fallback: Try to extract constraints from plaintext
    const plainConstraintRegex = /Constraints:\s*([\s\S]*?)(?=\n\n|$)/;
    const plainConstraintMatch = content.match(plainConstraintRegex);
    if (plainConstraintMatch) {
      const lines = plainConstraintMatch[1]
        .split(/\n|•|-/)
        .map((l) => l.trim())
        .filter((l) => l);
      constraints.push(...lines);
    }
  }

  return { examples, constraints };
};
