import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="font-bold text-lg">💰 BudgetBuddy</h1>
      <div>
        <Link to="/" className="px-3 hover:underline">Home</Link>
        <Link to="/planner" className="px-3 hover:underline">AI Planner</Link>
        <Link to="/add" className="px-3 hover:underline">Add Expense</Link>
      </div>
    </nav>
  );
}

export default Navbar;
