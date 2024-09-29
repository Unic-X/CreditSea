import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white p-4 flex justify-between items-center">
      <div className="text-green-700 font-bold text-xl">CREDIT APP</div>
      <nav>
        <a href="#" className="mx-2">Home</a>
        <a href="#" className="mx-2">Payments</a>
        <a href="#" className="mx-2">Budget</a>
        <a href="#" className="mx-2">Card</a>
      </nav>
      <div className="flex items-center">
        <span className="mr-2">User</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
