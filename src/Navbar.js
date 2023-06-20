import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white h-screen w-1/6 fixed left-0 top-0">
      <div className="flex flex-col justify-center h-full">
        <Link to="/" className="px-4 py-2 hover:bg-gray-700">Students</Link>
        <Link to="/employees" className="px-4 py-2 hover:bg-gray-700">Employees</Link>
      </div>
    </nav>
  );
};

export default NavBar;
