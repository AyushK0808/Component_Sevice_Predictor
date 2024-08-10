import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Avatar } from './Avatar'; // Import Avatar component

const Navbar = () => {
  // Use useLocation to get the current URL location
  const location = useLocation();

  // Extract query parameters from the location search
  const queryParams = new URLSearchParams(location.search);
  const userName = queryParams.get('name'); // Get 'name' parameter from the URL

  return (
    <nav className="flex justify-between items-center p-5 bg-gray-800 text-white">
      <Link to="/" className="px-4 py-2 hover:text-blue-700">
        <h1 className="text-2xl font-bold">MyApp</h1>
      </Link>
      <div className="flex items-center">
        {userName ? (
          <div className="flex items-center">
            <Avatar username={userName} />
            <Link
              to="/signin"
              className="ml-4 px-4 py-2 bg-blue-500 rounded hover:bg-blue-700"
            >
              Sign Out
            </Link>
          </div>
        ) : (
          <Link to="/signin" className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700">
            Sign In / Sign Up
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
