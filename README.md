# LetCpp

A modern, minimal website to browse C++ LeetCode solutions with clean code, multiple approaches, and clear complexity analysis.

## 🚀 Project Overview
LetCpp is a React + TypeScript web app that displays C++ solutions for LeetCode problems. It features real-time search, multiple solution approaches, and a mobile-friendly design.

## ✨ Features
- Clean URLs for each problem: `/problems/{number}`

- Problem title, difficulty, and local description
- Multiple C++ solution approaches per problem
- Syntax-highlighted C++ code (highlight.js)
- Time and space complexity analysis
- Real-time search by problem number or title
- Responsive, minimal design (Tailwind CSS)

## 🛠️ Tech Stack
- **Frontend:** React 18 + TypeScript
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS
- **Code Highlighting:** highlight.js
- **Data:** TypeScript files (easy to extend)

## 📁 Folder Structure
```
letcpp/
├── public/                # Static files
├── src/
│   ├── components/        # Header, CodeBlock, etc.
│   ├── data/              # problems.ts (problem data)
│   ├── pages/             # Home, ProblemDetail
│   ├── App.tsx            # Main app with routing
│   ├── index.tsx          # React entry point
│   └── index.css          # Tailwind CSS imports
├── tailwind.config.js     # Tailwind config
├── postcss.config.js      # PostCSS config
├── tsconfig.json          # TypeScript config
├── package.json           # Dependencies & scripts
```


## ➕ Adding Problems & Solutions
1. Open `src/data/problems.ts` to add new problem metadata (title, difficulty, etc.).
2. Add solution files in `src/solutions/` (e.g., `1.ts`, `2.ts`, etc.), each exporting an array of solution objects for that problem.
3. Each solution includes C++ code, approach, and complexity analysis.
4. All problem data and solutions are managed locally—no external API calls.


## 🏁 Running the App
```bash
cd letcpp
npm install
npm start
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.


## 📦 Deployment
You can deploy to Vercel, Netlify, Render, or any static hosting that supports React. All data is local—no LeetCode API or external dependencies required for problem content.

## 🌐 Live Demo
Deployed on Render: [https://letcpp.onrender.com](https://letcpp.onrender.com)

## 📄 License
MIT