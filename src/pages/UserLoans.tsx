import React from 'react'
import Header from '../components/Header'

const DeficitDisplay = () => (
  <div className="flex items-center space-x-2 mb-4">
    <div className="bg-green-500 p-2 rounded">
      <span className="text-white">$</span>
    </div>
    <div>
      <div className="text-sm text-gray-500">DEFICIT</div>
      <div className="text-2xl font-bold">₦ 0.0</div>
    </div>
  </div>
)

const ActionButtons = () => (
  <div className="flex space-x-2 mb-4">
    <button className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded">Borrow Cash</button>
    <button className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded">Transact</button>
    <button className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded">Deposit Cash</button>
  </div>
)

const SearchBar = () => (
  <div className="mb-4">
    <input type="text" placeholder="Search for loans" className="w-full px-4 py-2 border border-gray-300 rounded" />
  </div>
)

const AppliedLoansTable = () => {
  const loans = [
    { id: 1, officer: "John Okoh", amount: 50000.00, date: "June 09, 2021", status: "Pending" },
    { id: 2, officer: "John Okoh", amount: 100000.00, date: "June 07, 2021", status: "Verified" },
    { id: 3, officer: "John Okoh", amount: 100000.00, date: "June 07, 2021", status: "Rejected" },
    { id: 4, officer: "John Okoh", amount: 100000.00, date: "May 27, 2021", status: "Approved" },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Applied Loans</h2>
        <div className="flex space-x-2">
          <button className="px-2 py-1 bg-white border border-gray-300 rounded text-sm">Sort</button>
          <button className="px-2 py-1 bg-white border border-gray-300 rounded text-sm">Filter</button>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-2">Loan Officer</th>
            <th className="text-left p-2">Amount</th>
            <th className="text-left p-2">Date Applied</th>
            <th className="text-left p-2">Status</th>
            <th className="text-left p-2"></th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id} className="border-b">
              <td className="p-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                  {loan.officer}
                </div>
              </td>
              <td className="p-2">{loan.amount.toFixed(2)}</td>
              <td className="p-2">{loan.date}</td>
              <td className="p-2">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold
                  ${loan.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    loan.status === 'Verified' ? 'bg-green-100 text-green-800' :
                    loan.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                    'bg-blue-100 text-blue-800'}`}>
                  {loan.status}
                </span>
              </td>
              <td className="p-2">
                <button className="px-2 py-1 bg-white border border-gray-300 rounded text-sm">...</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <div>Rows per page: 7</div>
        <div>1-4 of 4</div>
        <div className="flex space-x-2">
          <button className="px-2 py-1 bg-white border border-gray-300 rounded text-sm" disabled>{'<'}</button>
          <button className="px-2 py-1 bg-white border border-gray-300 rounded text-sm" disabled>{'>'}</button>
        </div>
      </div>
    </div>
  )
}

const UserLoans: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <DeficitDisplay />
          <button className="px-4 py-2 bg-green-500 text-white rounded">Get A Loan</button>
        </div>
        <ActionButtons />
        <SearchBar />
        <AppliedLoansTable />
      </main>
    </div>
  )
}

export default UserLoans
