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

const MenuItem: React.FC<{ icon: React.ReactNode; label: string, link:string }> = ({ icon, label , link}) => (
  <a href={link} className="flex items-center py-2 px-4 text-white hover:bg-green-700 rounded">
    {icon}
    <span className="ml-3">{label}</span>
  </a>
);

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard',link:"/admin" },
    { icon: <Users size={20} />, label: 'Borrowers' ,link:""},
    { icon: <Wallet size={20} />, label: 'Loans' ,link:"/dashboard"},
    { icon: <RefreshCcw size={20} />, label: 'Repayments' ,link:""},
    { icon: <Scale size={20} />, label: 'Loan Parameters' ,link:""},
    { icon: <Calculator size={20} />, label: 'Accounting' ,link:""},
    { icon: <BarChart2 size={20} />, label: 'Reports' ,link:""},
    { icon: <FileText size={20} />, label: 'Collateral' ,link:""},
    { icon: <Key size={20} />, label: 'Access Configuration' ,link:""},
    { icon: <PiggyBank size={20} />, label: 'Savings',link:"" },
    { icon: <Receipt size={20} />, label: 'Expenses' ,link:""},
    { icon: <PenTool size={20} />, label: 'E-signature' ,link:""},
    { icon: <Briefcase size={20} />, label: 'Investor Accounts' ,link:""},
    { icon: <Calendar size={20} />, label: 'Calendar' ,link:""},
    { icon: <Settings size={20} />, label: 'Settings' ,link:""},
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
          <MenuItem key={index} icon={item.icon} label={item.label} link={item.link} />
        ))}
      </nav>
      <div className="p-4 border-t border-green-800">
        <MenuItem icon={<LogOut size={20} />} label="Sign Out" link=''/>
      </div>
    </aside>
  );
};

export default Sidebar;
