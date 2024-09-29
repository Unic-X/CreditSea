import React from 'react';

const Sidebar: React.FC = () => {
  const menuItems = [
    'Dashboard', 'Borrowers', 'Loans', 'Repayments', 'Loan Parameters',
    'Accounting', 'Reports', 'Collateral', 'Access Configuration', 'Savings',
    'Expenses', 'E-signature', 'Investor Accounts', 'Settings'
  ];

  return (
    <aside className="bg-green-800 text-white w-64 min-h-screen p-4">
      <div className="mb-8">
        <span className="text-2xl font-semibold">John Okoh</span>
      </div>
      <nav>
        {menuItems.map((item, index) => (
          <a key={index} href="#" className="block py-2 hover:bg-green-700 rounded px-2">
            {item}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
