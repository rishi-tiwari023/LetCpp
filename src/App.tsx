import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProblemDetail from "./pages/ProblemDetail";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problem/:problemNumber" element={<ProblemDetail />} />
            <Route path="/problems/:id" element={<ProblemDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
