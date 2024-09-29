
import React from 'react';
import { Bell, MessageSquare, ChevronDown, Home, CreditCard, DollarSign, PieChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-2 flex justify-between items-center">
      <div className="text-green-700 font-bold text-xl">CREDIT APP</div>
      <nav className="flex items-center space-x-6">
        <a
          href="#"
          onClick={() => navigate('/dashboard')}
          className="flex items-center text-green-700"
        >
          <Home className="w-5 h-5 mr-1" />
          <span>Home</span>
        </a>
        <a
          href="#"
          onClick={() => navigate('/userloan')}
          className="flex items-center text-green-700"
        >
          <DollarSign className="w-5 h-5 mr-1" />
          <span>Payments</span>
        </a>
        <a
          href="#"
          onClick={() => navigate('/apply')}
          className="flex items-center text-green-700"
        >
          <PieChart className="w-5 h-5 mr-1" />
          <span>Budget</span>
        </a>
        <a
          href="#"
          onClick={() => navigate('/userloan')}
          className="flex items-center text-green-700"
        >
          <CreditCard className="w-5 h-5 mr-1" />
          <span>Card</span>
        </a>
      </nav>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-800">
          <Bell className="w-5 h-5" />
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <MessageSquare className="w-5 h-5" />
        </button>
        <div className="flex items-center text-gray-600 hover:text-gray-800 cursor-pointer">
          <span className="mr-1">User</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </header>
  );
};

export default Header;

