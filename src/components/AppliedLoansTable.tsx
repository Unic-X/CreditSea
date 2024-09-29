import React, { useState } from 'react';
import { ArrowUpDown, Filter } from 'lucide-react';

const AppliedLoansTable: React.FC = () => {
  const initialLoans = [
    { id: 1, activity: 'Contact Email not Linked', customer: 'Tom Cruise', date: 'June 09, 2021', status: 'Pending', image: '/placeholder.svg' },
    { id: 2, activity: 'Adding Images to Featured Posts', customer: 'Matt Damon', date: 'June 09, 2021', status: 'Pending', image: '/placeholder.svg' },
    { id: 3, activity: 'When will I be charged this month?', customer: 'Robert Downey', date: 'June 09, 2021', status: 'Pending', image: '/placeholder.svg' },
    { id: 4, activity: 'Payment not going through', customer: 'Christian Bale', date: 'June 09, 2021', status: 'Viewed', image: '/placeholder.svg' },
    { id: 5, activity: 'Unable to add replies', customer: 'Henry Cavil', date: 'June 09, 2021', status: 'Viewed', image: '/placeholder.svg' },
  ];

  const [loans, setLoans] = useState(initialLoans);
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  // Handle sorting by customer name
  const handleSort = () => {
    const sortedLoans = [...loans].sort((a, b) =>
      sortAsc
        ? a.customer.localeCompare(b.customer)
        : b.customer.localeCompare(a.customer)
    );
    setLoans(sortedLoans);
    setSortAsc(!sortAsc);
  };

  // Handle filtering by loan status
  const handleFilter = (status: string | null) => {
    if (status) {
      setLoans(initialLoans.filter((loan) => loan.status === status));
    } else {
      setLoans(initialLoans); // Reset filter
    }
    setFilterStatus(status);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Applied Loans</h3>
        <div className="flex space-x-2">
          <button
            className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleSort}
          >
            <ArrowUpDown size={16} className="mr-1" /> Sort by Customer
          </button>
          <button
            className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() =>
              handleFilter(filterStatus === 'Pending' ? null : 'Pending')
            }
          >
            <Filter size={16} className="mr-1" /> {filterStatus === 'Pending' ? 'Clear Filter' : 'Filter Pending'}
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
              <td className="px-6 py-4 whitespace-nowrap">{loan.customer}</td>
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

