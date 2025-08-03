import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 text-2xl font-bold text-blue-600 hover:text-blue-700"
          >
            <img src="/logo.png" alt="LetCpp Logo" className="w-8 h-8" />
            LetCpp
          </Link>

          <div className="flex-1 mx-8">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-700">
                C++ LeetCode Solutions
              </h2>
              <p className="text-sm text-gray-500">
                Navigate to /problems/[number] to view solutions
              </p>
            </div>
          </div>

          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              LeetCode
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
