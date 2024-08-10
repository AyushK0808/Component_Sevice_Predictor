import React, { useState } from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

function Header({ OpenSidebar, onSearch }) {
  const [searching, setSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchClick = () => {
    setSearching(!searching);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
    setSearchQuery('');
    setSearching(false);
  };

  return (
    <header className='header flex justify-between items-center p-5 bg-gray-800 text-white'>
      <div className='menu-icon'>
        <BsJustify className='icon cursor-pointer' onClick={OpenSidebar} />
      </div>
      <div className='header-left flex items-center'>
        {searching ? (
          <form onSubmit={handleSearchSubmit} className='relative flex items-center'>
            <input
              type="search"
              className="block w-full rounded-l border border-gray-300 px-3 py-2 text-base leading-6 text-gray-700 outline-none transition duration-200 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon1"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <button
              type='submit'
              className="relative z-[2] flex items-center rounded-r bg-blue-500 px-4 py-2 text-xs font-medium uppercase text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
              id="button-addon1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd" />
              </svg>
            </button>
          </form>
        ) : (
          <BsSearch className='icon cursor-pointer' onClick={handleSearchClick} />
        )}
      </div>
      {/* <div className='flex items-center space-x-4'>
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <BsPersonCircle className='icon' />
      </div> */}
    </header>
  );
}

export default Header;
