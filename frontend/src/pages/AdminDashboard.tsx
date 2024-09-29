import React, { useEffect, useState } from 'react';
import { 
  Users, Wallet, PiggyBank, Building, DollarSign,
  ArrowUpDown, Filter, ChevronLeft, ChevronRight
} from 'lucide-react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { LoansReleasedChart, OutstandingLoansChart, RepaymentsCollectedChart } from '../components/Chart';
import StatCard from '../components/StatCard';
import axios from 'axios';

interface Loan {
  id: string;
  user: string;
  details: string;
  date: string;
  status: string;
  image: string;
  activity : string;
}

const RecentLoans: React.FC = () => {
  const [loans, setLoans] = useState<Loan[]>([]);
  const randomImages = [
    '/images/user1.png',
    '/images/user2.png',
    '/images/user3.png',
    '/images/user4.png',
    '/images/user5.png',
  ];
  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await axios.get<any[]>('https://loonix.in:8493/api/loanApplications');
        const fetchedLoans: Loan[] = response.data.map((loan, _) => ({
          id: loan._id,
          user: loan.fullName,
          details: `Loan Amount: $${loan.loanAmount}`,
          date: loan.date,
          status: loan.status,
          image: randomImages[Math.floor(Math.random() * randomImages.length)],
          activity : loan.reason
        }));
        setLoans(fetchedLoans);
      } catch (error) {
        console.error('Error fetching loans:', error);
      }
    };

    fetchLoans();
    }, []);  
    return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Loans</h3>
        <div className="flex space-x-2">
          <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <ArrowUpDown size={16} className="mr-1" /> Sort
          </button>
          <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Filter size={16} className="mr-1" /> Filter
          </button>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {loans.map((loan) => (
            <li key={loan.id} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img className="h-10 w-10 rounded-full" src={loan.image} alt="" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{loan.user}</div>
                    <div className="text-sm text-gray-500">{loan.activity}</div>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    loan.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {loan.status}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Previous
          </button>
          <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">{loans.length}</span> of <span className="font-medium">97</span> results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Previous</span>
                <ChevronLeft size={20} />
              </button>
              <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Next</span>
                <ChevronRight size={20} />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecoveryRateCards: React.FC = () => (
  <div className="grid grid-cols-2 gap-4">
    <div className="bg-orange-500 p-4 rounded-lg shadow">
      <h3 className="text-white text-sm font-semibold mb-2">Rate of Recovery (Open, Fully Paid, Default Loans)</h3>
      <p className="text-white text-3xl font-bold">45%</p>
    </div>
    <div className="bg-green-500 p-4 rounded-lg shadow">
      <h3 className="text-white text-sm font-semibold mb-2">Rate of Recovery (Open Loans)</h3>
      <p className="text-white text-3xl font-bold">35%</p>
    </div>
  </div>
);

// Main AdminDashboard component
const AdminDashboard: React.FC = () => {
  const loansReleasedData = [
    { month: 'Jan', value: 400 },
    { month: 'Feb', value: 300 },
    { month: 'Mar', value: 600 },
    { month: 'Apr', value: 200 },
    { month: 'May', value: 700 },
    { month: 'Jun', value: 400 },
    { month: 'Jul', value: 500 },
    { month: 'Aug', value: 600 },
    { month: 'Sep', value: 300 },
    { month: 'Oct', value: 400 },
    { month: 'Nov', value: 800 },
    { month: 'Dec', value: 1000 },
  ];

  const outstandingLoansData = [
    { month: 'Jan', value: 100 },
    { month: 'Feb', value: 500 },
    { month: 'Mar', value: 600 },
    { month: 'Apr', value: 900 },
    { month: 'May', value: 200 },
    { month: 'Jun', value: 500 },
    { month: 'Jul', value: 300 },
    { month: 'Aug', value: 900 },
    { month: 'Sep', value: 600 },
    { month: 'Oct', value: 200 },
    { month: 'Nov', value: 500 },
    { month: 'Dec', value: 400 },
  ];

  const repaymentsCollectedData = [
    { month: 'Jan', value: 1 },
    { month: 'Feb', value: 5 },
    { month: 'Mar', value: 6 },
    { month: 'Apr', value: 9 },
    { month: 'May', value: 2 },
    { month: 'Jun', value: 5 },
    { month: 'Jul', value: 3 },
    { month: 'Aug', value: 9 },
    { month: 'Sep', value: 6 },
    { month: 'Oct', value: 2 },
    { month: 'Nov', value: 5 },
    { month: 'Dec', value: 4 },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>
            <div className="mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard icon={<Users size={24} className="text-white" />} title="ACTIVE USERS" value="200" />
                <StatCard icon={<Users size={24} className="text-white" />} title="BORROWERS" value="100" />
                <StatCard icon={<DollarSign size={24} className="text-white" />} title="CASH DISBURSED" value="550,000" />
                <StatCard icon={<DollarSign size={24} className="text-white" />} title="CASH RECEIVED" value="1,000,000" />
                <StatCard icon={<PiggyBank size={24} className="text-white" />} title="SAVINGS" value="450,000" />
                <StatCard icon={<Wallet size={24} className="text-white" />} title="REPAID LOANS" value="30" />
                <StatCard icon={<Building size={24} className="text-white" />} title="OTHER ACCOUNTS" value="10" />
                <StatCard icon={<Wallet size={24} className="text-white" />} title="LOANS" value="50" />
              </div>
            </div>
            <div className="mt-8">
              <RecentLoans />
            </div>
            <div className="mt-8">
              <LoansReleasedChart data={loansReleasedData} />
            </div>
            <div className="mt-8">
              <OutstandingLoansChart data={outstandingLoansData} />
            </div>
            <div className="mt-8">
              <RecoveryRateCards />
            </div>
            <div className="mt-8">
              <RepaymentsCollectedChart data={repaymentsCollectedData} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
