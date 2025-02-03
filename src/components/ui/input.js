import React from 'react';

const Input = ({ className = '', ...props }) => {
  return (
    <input
      className={`w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
      {...props}
    />
  );
};

export default Input;
