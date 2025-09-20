import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check current session from localStorage
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }

    // Listen for storage changes (when user logs in/out in another tab)
    const handleStorageChange = () => {
      const token = localStorage.getItem('token');
      const userData = localStorage.getItem('user');
      
      if (token && userData) {
        setIsLoggedIn(true);
        setUser(JSON.parse(userData));
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between items-center">
      <Link to="/" className="font-bold text-lg hover:text-blue-200">💰 BudgetBuddy</Link>
      
      <div className="flex items-center space-x-4">
        <Link to="/" className="px-3 py-2 hover:bg-blue-700 rounded transition-colors">
          Home
        </Link>
        
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" className="px-3 py-2 hover:bg-blue-700 rounded transition-colors">
              Dashboard
            </Link>
            <Link to="/planner" className="px-3 py-2 hover:bg-blue-700 rounded transition-colors">
              AI Planner
            </Link>
            <Link to="/add" className="px-3 py-2 hover:bg-blue-700 rounded transition-colors">
              Add Expense
            </Link>
            
            <div className="flex items-center space-x-2 ml-4">
              <span className="text-sm text-blue-200">
                Welcome, {user?.name || user?.email}
              </span>
              <button
                onClick={handleLogout}
                className="px-3 py-2 bg-red-600 hover:bg-red-700 rounded transition-colors text-sm"
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <Link 
              to="/login" 
              className="px-3 py-2 hover:bg-blue-700 rounded transition-colors"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="px-3 py-2 bg-green-600 hover:bg-green-700 rounded transition-colors"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
