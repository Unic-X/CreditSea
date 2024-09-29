import React from 'react'
import Header from '../components/Header'

const DeficitDisplay = () => (
  <div className="flex items-center space-x-2 mb-4">
    <div className="bg-green-500 p-2 rounded">
      <span className="text-white">₦</span>
    </div>
    <div>
      <div className="text-sm text-gray-500">DEFICIT</div>
      <div className="text-3xl font-bold text-gray-900">₦ 0.0</div>
    </div>
  </div>
)

const ActionButtons = () => (
  <div className="flex space-x-4 mb-6">
    <button className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-200">Borrow Cash</button>
    <button className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-200">Transact</button>
    <button className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-200">Deposit Cash</button>
  </div>
)

const SearchBar = () => (
  <div className="mb-6">
    <input type="text" placeholder="Search for loans" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
  </div>
)

const AppliedLoansTable = () => {
  const loans = [
    { id: 1, officer: "John Okoh", amount: 50000.00, date: "June 09, 2021", status: "Pending" ,image:"/images/user1.png"},
    { id: 2, officer: "John Okoh", amount: 100000.00, date: "June 07, 2021", status: "Verified" ,image:"/images/user1.png"},
    { id: 3, officer: "John Okoh", amount: 100000.00, date: "June 07, 2021", status: "Rejected"  ,image:"/images/user1.png"},
    { id: 4, officer: "John Okoh", amount: 100000.00, date: "May 27, 2021", status: "Approved"  ,image:"/images/user1.png"},
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Applied Loans</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 border border-gray-300 rounded-lg text-sm">Sort</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 border border-gray-300 rounded-lg text-sm">Filter</button>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-3 text-gray-600">Loan Officer</th>
            <th className="text-left p-3 text-gray-600">Amount</th>
            <th className="text-left p-3 text-gray-600">Date Applied</th>
            <th className="text-left p-3 text-gray-600">Status</th>
            <th className="text-left p-3 text-gray-600"></th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id} className="border-b">
              <td className="p-3">
                <div className="flex items-center">
                    <img className="h-8 w-8 rounded-full mr-2" src={loan.image} alt="" />
                  {loan.officer}
                </div>
              </td>
              <td className="p-3">{loan.amount.toFixed(2)}</td>
              <td className="p-3">{loan.date}</td>
              <td className="p-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold
                  ${loan.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' :
                    loan.status === 'Verified' ? 'bg-green-200 text-green-800' :
                    loan.status === 'Rejected' ? 'bg-red-200 text-red-800' :
                    'bg-blue-200 text-blue-800'}`}>
                  {loan.status}
                </span>
              </td>
              <td className="p-3">
                <button className="px-2 py-1 bg-gray-200 text-gray-700 border border-gray-300 rounded-lg text-sm">...</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4 text-gray-600">
        <div>Rows per page: 7</div>
        <div>1-4 of 4</div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-gray-200 border border-gray-300 rounded-lg text-sm" disabled>{'<'}</button>
          <button className="px-3 py-1 bg-gray-200 border border-gray-300 rounded-lg text-sm" disabled>{'>'}</button>
        </div>
      </div>
    </div>
  )
}

const UserLoans: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <DeficitDisplay />
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg">Get A Loan</button>
        </div>
        <ActionButtons />
        <SearchBar />
        <AppliedLoansTable />
      </main>
    </div>
  )
}

export default UserLoans

