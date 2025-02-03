import React from 'react';
import { useNavigate } from 'react-router-dom';
import'../../src/index.css';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl space-y-6">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-900">
          About BromenWallet
        </h2>
        <p className="text-gray-700 text-center">
          BromenWallet is your ultimate digital wallet solution, designed to make managing your finances simple, secure, and seamless. 
          With cutting-edge features and an intuitive interface, BromenWallet empowers users to handle transactions, track expenses, 
          and achieve financial goals with ease.
        </p>

        <p className="text-gray-700">
          Whether you're making payments, saving for the future, or monitoring your spending, BromenWallet provides all the tools you need 
          to take control of your financial life. Built with security and user privacy in mind, our platform ensures that your data is 
          protected at all times.
        </p>

        <p className="text-gray-700">
          Join us on this journey to redefine financial management and experience the freedom of a smarter, more connected way to handle your money.
        </p>

        {/* Back to Home Button */}
        <button
          onClick={() => navigate('/')}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
