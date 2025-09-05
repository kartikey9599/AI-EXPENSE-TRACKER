import React from "react";
import { Pencil, Trash2 } from "lucide-react"; // install lucide-react if not already
import expenses from "../data.json";

const ExpenseTable = () => {
  return (
    <div className="overflow-x-auto shadow border border-gray-300">
      <table className="min-w-full text-sm text-gray-700">
        <thead>
          <tr className="bg-black text-white font-bold">
            <th className="p-3 text-left">Expense Title</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-right">Amount ($)</th>
            <th className="p-3 text-center">Date</th>
            <th className="p-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr
              key={expense.id}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
              <td className="p-3">{expense.title}</td>
              <td className="p-3">{expense.category}</td>
              <td className="p-3 text-right font-medium">${expense.amount}</td>
              <td className="p-3 text-center">{expense.date}</td>
              <td className="p-3 text-center space-x-3">
                <button className="text-blue-600 hover:text-blue-800">
                  <Pencil size={18} />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
