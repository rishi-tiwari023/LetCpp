# LetCpp Startup Guide

This guide will help you set up, run, and extend the LetCpp C++ LeetCode solutions website.

## 1. Prerequisites
- Node.js (v16+ recommended)
- npm (comes with Node.js)

## 2. Setup
Clone or download the repository, then open a terminal in the project folder:

```bash
cd letcpp
npm install
```

## 3. Running the App
Start the development server:

```bash
npm start
```

- The app will open at [http://localhost:3000](http://localhost:3000) (or another port if 3000 is busy).
- Hot reloading is enabled for fast development.

## 4. Project Structure
- `src/data/problems.ts`: Add or edit LeetCode problems and solutions here.
- `src/pages/`: Main pages (Home, ProblemDetail)
- `src/components/`: UI components (Header, CodeBlock, etc.)

## 5. Adding New Problems
1. Open `src/data/problems.ts`.
2. Copy the format of the existing problem object.
3. Fill in the fields: `id`, `title`, `difficulty`, `description`, `examples`, `constraints`, and `solutions` (with code, approach, complexity, and explanation).
4. Save the file. The new problem will appear automatically.

## 6. Customization
- **Styling:** Edit Tailwind classes in components for custom look.
- **Code Highlighting:** Uses highlight.js (see `CodeBlock.tsx`).
- **Deployment:** Deploy to Vercel, Netlify, or your preferred static host.

## 7. Troubleshooting
- If you see errors, make sure you are in the `letcpp` directory and have run `npm install`.
- For TypeScript errors, check your code matches the interfaces in `problems.ts`.

## 8. Contributing
- Fork the repo, make your changes, and submit a pull request!

---
Happy coding! 🚀