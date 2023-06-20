import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-green-800 text-white h-screen w-1/6 fixed left-0 top-0">
      <div className="flex flex-col justify-center h-full text-lg">
        <Link to="/" className="px-4 py-2 hover:bg-green-700">Students</Link>
        <Link to="/employees" className="px-4 py-2 hover:bg-green-700">Employees</Link>
        <Link to="/SFeedback" className="px-4 py-2 hover:bg-green-700">Student Feedback</Link>
        <Link to="/EFeedback" className="px-4 py-2 hover:bg-green-700">Employee Feedback</Link>
      </div>
    </nav>
  );
};

export default NavBar;
