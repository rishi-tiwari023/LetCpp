import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'cpp' }) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
        <span className="text-gray-300 text-sm font-medium">C++</span>
      </div>
      <pre className="p-4 m-0">
        <code
          ref={codeRef}
          className={`language-${language} text-sm leading-relaxed`}
        >
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock; 