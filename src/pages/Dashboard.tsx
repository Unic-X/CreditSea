import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import AppliedLoansTable from '../components/AppliedLoansTable';
import Chart from '../components/Chart';

const Dashboard: React.FC = () => {
  const loanData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 200 },
    { name: 'May', value: 700 },
    { name: 'Jun', value: 400 },
    { name: 'Jul', value: 500 },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>
            <div className="mt-4">
              <div className="flex flex-wrap -mx-6">
                <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                  <StatCard title="LOANS" value="50" icon={<span>💰</span>} />
                </div>
                <div className="w-full px-6 sm:w-1/2 xl:w-1/3 mt-4 sm:mt-0">
                  <StatCard title="BORROWERS" value="100" icon={<span>👥</span>} />
                </div>
                <div className="w-full px-6 sm:w-1/2 xl:w-1/3 mt-4 xl:mt-0">
                  <StatCard title="CASH DISBURSED" value="550,000" icon={<span>💵</span>} />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <AppliedLoansTable />
            </div>
            <div className="mt-8">
              <Chart data={loanData} color="#4CAF50" title="Loans Released Monthly" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
