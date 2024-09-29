import React from 'react';
import {
  User,
  LayoutDashboard,
  Users,
  Wallet,
  RefreshCcw,
  Scale,
  Calculator,
  BarChart2,
  FileText,
  Key,
  PiggyBank,
  Receipt,
  PenTool,
  Briefcase,
  Calendar,
  Settings,
  LogOut
} from 'lucide-react';

const MenuItem: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <a href="#" className="flex items-center py-2 px-4 text-white hover:bg-green-700 rounded">
    {icon}
    <span className="ml-3">{label}</span>
  </a>
);

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { icon: <Users size={20} />, label: 'Borrowers' },
    { icon: <Wallet size={20} />, label: 'Loans' },
    { icon: <RefreshCcw size={20} />, label: 'Repayments' },
    { icon: <Scale size={20} />, label: 'Loan Parameters' },
    { icon: <Calculator size={20} />, label: 'Accounting' },
    { icon: <BarChart2 size={20} />, label: 'Reports' },
    { icon: <FileText size={20} />, label: 'Collateral' },
    { icon: <Key size={20} />, label: 'Access Configuration' },
    { icon: <PiggyBank size={20} />, label: 'Savings' },
    { icon: <Receipt size={20} />, label: 'Expenses' },
    { icon: <PenTool size={20} />, label: 'E-signature' },
    { icon: <Briefcase size={20} />, label: 'Investor Accounts' },
    { icon: <Calendar size={20} />, label: 'Calendar' },
    { icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <aside className="bg-green-900 text-white w-64 min-h-screen flex flex-col">
      <div className="p-4 border-b border-green-800">
        <div className="flex items-center mb-4">
          <User size={24} className="text-green-400" />
          <span className="ml-3 text-xl font-semibold">John Okoh</span>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        {menuItems.map((item, index) => (
          <MenuItem key={index} icon={item.icon} label={item.label} />
        ))}
      </nav>
      <div className="p-4 border-t border-green-800">
        <MenuItem icon={<LogOut size={20} />} label="Sign Out" />
      </div>
    </aside>
  );
};

export default Sidebar;
