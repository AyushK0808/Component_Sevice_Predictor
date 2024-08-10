import React from 'react';

export function Avatar({ username }) {
  const userInitial = username ? username.charAt(0).toUpperCase() : '';

  return (
    <div className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full font-bold">
      {userInitial}
    </div>
  );
}
