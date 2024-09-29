import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import AppliedLoansTable from '../components/AppliedLoansTable';
import { LoansReleasedChart, OutstandingLoansChart, RepaymentsCollectedChart } from '../components/Chart'
import { PiggyBank, User, DollarSign, CreditCard, Wallet } from 'lucide-react';

const Dashboard: React.FC = () => {
 const loansReleasedData = [
    { month: 'Jan', value: 400 },
    { month: 'Feb', value: 300 },
    { month: 'Mar', value: 600 },
    { month: 'Apr', value: 400 },
    { month: 'May', value: 500 },
    { month: 'Jun', value: 350 },
    { month: 'Jul', value: 450 },
    { month: 'Aug', value: 300 },
    { month: 'Sep', value: 200 },
    { month: 'Oct', value: 600 },
    { month: 'Nov', value: 450 },
    { month: 'Dec', value: 700 },
  ]

  const outstandingLoansData = [
    { month: 'Jan', value: 50 },
    { month: 'Feb', value: 400 },
    { month: 'Mar', value: 450 },
    { month: 'Apr', value: 700 },
    { month: 'May', value: 100 },
    { month: 'Jun', value: 400 },
    { month: 'Jul', value: 300 },
    { month: 'Aug', value: 700 },
    { month: 'Sep', value: 450 },
    { month: 'Oct', value: 400 },
    { month: 'Nov', value: 300 },
    { month: 'Dec', value: 350 },
  ]

  const repaymentsCollectedData = [
    { month: 'Jan', value: 1 },
    { month: 'Feb', value: 5 },
    { month: 'Mar', value: 6 },
    { month: 'Apr', value: 10 },
    { month: 'May', value: 2 },
    { month: 'Jun', value: 5 },
    { month: 'Jul', value: 3 },
    { month: 'Aug', value: 10 },
    { month: 'Sep', value: 6 },
    { month: 'Oct', value: 1 },
    { month: 'Nov', value: 5 },
    { month: 'Dec', value: 4 },
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">Dashboard {'>'} Loans</h3>
            <div className="mt-4">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                <StatCard
                  title="LOANS"
                  value="50"
                  icon={<DollarSign className="w-10 h-10 text-green-700" />}
                />
                <StatCard
                  title="BORROWERS"
                  value="100"
                  icon={<User className="w-10 h-10 text-green-700" />}
                />
                <StatCard
                  title="CASH DISBURSED"
                  value="550,000"
                  icon={<CreditCard className="w-10 h-10 text-green-700" />}
                />
                <StatCard
                  title="SAVINGS"
                  value="450,000"
                  icon={<PiggyBank className="w-10 h-10 text-green-700" />}
                />
                <StatCard
                  title="REPAID LOANS"
                  value="30"
                  icon={<User className="w-10 h-10 text-green-700" />}
                />
                <StatCard
                  title="CASH RECEIVED"
                  value="1,000,000"
                  icon={<Wallet className="w-10 h-10 text-green-700" />}
                />
              </div>
            </div>
            <div className="mt-8">
              <AppliedLoansTable />
            </div>
           <div className="mt-8 space-y-6">
              <LoansReleasedChart data={loansReleasedData} />
              <OutstandingLoansChart data={outstandingLoansData} />
              <RepaymentsCollectedChart data={repaymentsCollectedData} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

