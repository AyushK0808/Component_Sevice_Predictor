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
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        {searching ? (
          <form onSubmit={handleSearchSubmit} className='search-form'>
            <input
              type='text'
              value={searchQuery}
              onChange={handleInputChange}
              placeholder='Search for machine...'
            />
            <button type='submit'>Search</button>
          </form>
        ) : (
          <BsSearch className='icon' onClick={handleSearchClick} />
        )}
      </div>
      {/* Optional right side icons */}
    </header>
  );
}

export default Header;
