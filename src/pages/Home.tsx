import React from "react";

const Home: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">LetCpp</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          A comprehensive collection of C++ solutions for LeetCode problems.
          Clean, efficient code with detailed complexity analysis and multiple
          approaches.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://leetcode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Visit LeetCode
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>

      {/* How to Use Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          How to Find Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Know the Problem Number
            </h3>
            <p className="text-gray-600">
              Find the LeetCode problem number you're looking for (e.g., Problem
              #1, #2, etc.)
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Use the URL
            </h3>
            <p className="text-gray-600">
              Navigate to{" "}
              <code className="bg-gray-100 px-2 py-1 rounded">
                /problem/{"{number}"}
              </code>
              (e.g.,{" "}
              <code className="bg-gray-100 px-2 py-1 rounded">
                /problem/564
              </code>
              )
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Explore Solutions
            </h3>
            <p className="text-gray-600">
              View multiple C++ approaches with detailed explanations and
              complexity analysis
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            ✨ Features
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Real-time problem data from LeetCode
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Multiple solution approaches per problem
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Detailed time and space complexity analysis
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Syntax-highlighted C++ code
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Clean, responsive design
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            🛠️ Tech Stack
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">⚛️</span>
              React 18 + TypeScript
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">🎨</span>
              Tailwind CSS
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">🔗</span>
              React Router DOM
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">💡</span>
              highlight.js for code syntax
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">📡</span>
              LeetCode GraphQL API
            </li>
          </ul>
        </div>
      </div>

      {/* Developer Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Developer
        </h2>
        <div className="text-center mb-8">
          <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-gray-200 shadow-lg">
            <img
              src="/Developer.jpeg"
              alt="Rishi Tiwari"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Rishi Tiwari
          </h3>
          <p className="text-gray-600 mb-4">
            Full Stack Developer & Competitive Programmer
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="https://www.linkedin.com/in/rishi-tiwari023/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>

          <a
            href="https://leetcode.com/u/2311038_cscysIIB/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362c.56 1.991 1.976 3.578 3.954 4.591a5.62 5.62 0 0 0 2.38.54c.42 0 .84-.062 1.25-.187a5.5 5.5 0 0 0 1.5-.625l.5-.375 3.5 3.75a1.374 1.374 0 0 0 1.961 0l3.5-3.75.5.375a5.5 5.5 0 0 0 1.5.625c.41.125.83.187 1.25.187a5.62 5.62 0 0 0 2.38-.54c1.978-1.013 3.394-2.6 3.954-4.591a5.527 5.527 0 0 0 .062-2.362 5.35 5.35 0 0 0-.125-.513 5.266 5.266 0 0 0-1.209-2.104L16.884 6.226l-5.406-5.788A1.374 1.374 0 0 0 13.483 0z" />
            </svg>
            LeetCode
          </a>

          <a
            href="https://github.com/rishi-tiwari023/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Get in Touch
        </h3>
        <p className="text-gray-600 mb-4">
          Have questions or suggestions? Feel free to reach out!
        </p>
        <a
          href="mailto:your.email@example.com"
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          your.email@example.com
        </a>
      </div>
    </div>
  );
};

export default Home;
