import React, { useState } from "react";
import axios from "axios";

function AddExpense() {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const res = await axios.post("http://127.0.0.1:8000/expenses/add", {
      category,
      amount: parseFloat(amount),
    });
    setMessage(res.data.message);
    setCategory("");
    setAmount("");
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add Expense 📝</h2>
      <div className="flex flex-col gap-2 w-64">
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      {message && <p className="mt-4 text-green-700">{message}</p>}
    </div>
  );
}

export default AddExpense;
