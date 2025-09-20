import React, { useState } from "react";
import axios from "axios";

function AIPlanner() {
  const [city, setCity] = useState("");
  const [income, setIncome] = useState("");
  const [plan, setPlan] = useState(null);

  const handleSubmit = async () => {
    const res = await axios.post("http://127.0.0.1:8000/budget/generate", {
      city,
      income: parseInt(income),
      lifestyle: "balanced",
      goals: ["savings", "investment"],
    });
    setPlan(res.data.plan);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">AI Budget Planner 🤖</h2>
      <div className="flex flex-col gap-2 w-64">
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Enter your city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          type="number"
          placeholder="Monthly Income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Generate Plan
        </button>
      </div>

      {plan && (
        <div className="mt-6 bg-gray-100 p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Your Suggested Plan:</h3>
          <ul className="space-y-1">
            {Object.entries(plan).map(([k, v]) => (
              <li key={k} className="flex justify-between">
                <span>{k}</span>
                <span className="font-medium">₹{v}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AIPlanner;
