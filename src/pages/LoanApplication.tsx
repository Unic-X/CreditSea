
import React from 'react';
import Header from '../components/Header';

const LoanApplication: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white w-full max-w-3xl p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mb-8">APPLY FOR A LOAN</h1>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="fullName">
                  Full name as it appears on bank account
                </label>
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-green-500 focus:ring-green-500 focus:outline-none focus:ring focus:ring-opacity-40"
                  id="fullName"
                  type="text"
                  placeholder="Full name as it appears on bank account"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="loanAmount">
                  How much do you need?
                </label>
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-green-500 focus:ring-green-500 focus:outline-none focus:ring focus:ring-opacity-40"
                  id="loanAmount"
                  type="number"
                  placeholder="How much do you need?"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="loanTerm">
                  Loan tenure (in months)
                </label>
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-green-500 focus:ring-green-500 focus:outline-none focus:ring focus:ring-opacity-40"
                  id="loanTerm"
                  type="number"
                  placeholder="Loan tenure (in months)"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="employmentStatus">
                  Employment status
                </label>
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-green-500 focus:ring-green-500 focus:outline-none focus:ring focus:ring-opacity-40"
                  id="employmentStatus"
                  type="text"
                  placeholder="Employment status"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="reason">
                  Reason for loan
                </label>
                <textarea
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-green-500 focus:ring-green-500 focus:outline-none focus:ring focus:ring-opacity-40"
                  id="reason"
                  placeholder="Reason for loan"
                  rows={2}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="employmentAddress">
                  Employment address
                </label>
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-green-500 focus:ring-green-500 focus:outline-none focus:ring focus:ring-opacity-40"
                  id="employmentAddress"
                  type="text"
                  placeholder="Employment address"
                />
              </div>
            </div>

            {/* Chart placeholder */}
            <div className="w-full h-40 bg-gray-100 text-center flex justify-center items-center text-gray-400">
              Chart
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I have read the important information and accept that by completing this application, I will be bound by
                the terms.
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="creditInfo"
                name="creditInfo"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="creditInfo" className="ml-2 block text-sm text-gray-700">
                Any personal or credit information obtained may be disclosed from time to time to other lenders, credit
                bureaus, or other credit reporting agencies.
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-700 focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoanApplication;

