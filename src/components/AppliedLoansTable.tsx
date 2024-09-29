import React from 'react';

const AppliedLoansTable: React.FC = () => {
  const loans = [
    { id: 1, activity: 'Contact Email not Linked', customer: 'Tom Cruise', date: 'June 09, 2021', status: 'Pending' },
    { id: 2, activity: 'Adding Images to Featured Posts', customer: 'Matt Damon', date: 'June 09, 2021', status: 'Pending' },
    { id: 3, activity: 'When will I be charged this month?', customer: 'Robert Downey', date: 'June 09, 2021', status: 'Pending' },
    { id: 4, activity: 'Payment not going through', customer: 'Christian Bale', date: 'June 09, 2021', status: 'Viewed' },
    { id: 5, activity: 'Unable to add replies', customer: 'Henry Cavil', date: 'June 09, 2021', status: 'Viewed' },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td className="px-6 py-4 whitespace-nowrap">{loan.activity}</td>
              <td className="px-6 py-4 whitespace-nowrap">{loan.customer}</td>
              <td className="px-6 py-4 whitespace-nowrap">{loan.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${loan.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
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
