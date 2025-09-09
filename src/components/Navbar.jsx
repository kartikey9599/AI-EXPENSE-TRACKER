import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      {/* Logo / App Name */}
      <Link to={"/"}>
        {" "}
        <h4 className="text-xl font-bold text-blue-600">AI Expense Tracker</h4>
      </Link>

      {/* Links + User Info */}
      <div className="flex items-center space-x-6">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 transition font-medium">
          Dashboard
        </Link>
        <Link
          to="/add-expense"
          className="text-gray-700 hover:text-blue-600 transition font-medium">
          Add Expense
        </Link>
        <Link
          to="/login"
          className="text-gray-700 hover:text-red-600 transition font-medium">
          Log Out
        </Link>

        {/* User Greeting */}
        <p className="ml-4 text-sm text-gray-500 italic">Hi, Kartikey 👋</p>
      </div>
    </nav>
  );
};

export default Navbar;
