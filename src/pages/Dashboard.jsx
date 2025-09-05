import React from "react";
import ExpenseTable from "../components/ExpenseTable";

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
        {/* Total Expenses Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <p className="text-gray-500 text-sm">Total Expenses</p>
          <h4 className="text-2xl font-bold text-blue-600 mt-2">$2500</h4>
        </div>

        {/* Categories Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <p className="text-gray-500 text-sm">Categories</p>
          <h4 className="text-2xl font-bold text-green-600 mt-2">5</h4>
        </div>

        {/* This Month Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <p className="text-gray-500 text-sm">This Month</p>
          <h4 className="text-2xl font-bold text-purple-600 mt-2">$500</h4>
        </div>
      </div>
      <ExpenseTable />
    </div>
  );
};

export default Dashboard;
