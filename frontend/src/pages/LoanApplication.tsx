
import React, { useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';

const LoanApplication: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    loanAmount: '',
    loanTerm: '',
    employmentStatus: '',
    reason: '',
    employmentAddress: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('https://loonix.in/api/loanApplications', formData);
      alert('Form submitted successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit the form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white w-full max-w-3xl p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mb-8">APPLY FOR A LOAN</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                  value={formData.fullName}
                  onChange={handleChange}
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
                  value={formData.loanAmount}
                  onChange={handleChange}
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
                  value={formData.loanTerm}
                  onChange={handleChange}
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
                  value={formData.employmentStatus}
                  onChange={handleChange}
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
                  value={formData.reason}
                  onChange={handleChange}
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
                  value={formData.employmentAddress}
                  onChange={handleChange}
                />
              </div>
            </div>

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
                className={`px-6 py-3 text-white rounded-lg font-bold focus:outline-none focus:shadow-outline ${
                  isSubmitting
                    ? 'bg-green-400 cursor-not-allowed'
                    : 'bg-green-500 hover:bg-green-700'
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  'Submit'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoanApplication;

