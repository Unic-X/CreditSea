import React, { useEffect, useState } from 'react';
import { ArrowUpDown, Filter } from 'lucide-react';
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

const AppliedLoansTable: React.FC = () => {


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
        const response = await axios.get<any[]>('http://localhost:5000/api/loanApplications');
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
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Applied Loans</h3>
        <div className="flex space-x-2">
          <button
            className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <ArrowUpDown size={16} className="mr-1" /> Sort
          </button>
          <button
            className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Filter size={16} className="mr-1" /> Filter
          </button>
        </div>
      </div>
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Activity
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Customer
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img className="h-10 w-10 rounded-full" src={loan.image} alt="" />
                  </div>
                  <div className="ml-4">
                    <div>{loan.activity}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{loan.user}</td>
              <td className="px-6 py-4 whitespace-nowrap">{loan.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    loan.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {loan.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppliedLoansTable;

