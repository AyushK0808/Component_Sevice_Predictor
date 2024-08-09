import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-800 text-white">
     <Link to="/" className="px-4 py-2 hover:text-blue-700">
      <h1 className="text-2xl font-bold">MyApp</h1>
      </Link>
      <div>
        <Link to="/signin" className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700">
          Sign In / Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
