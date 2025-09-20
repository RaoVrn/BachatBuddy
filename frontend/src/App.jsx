import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AIPlanner from "./pages/AIPlanner";
import AddExpense from "./pages/AddExpense";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planner" element={<AIPlanner />} />
          <Route path="/add" element={<AddExpense />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
