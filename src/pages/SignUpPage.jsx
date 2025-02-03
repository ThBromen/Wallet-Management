import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet } from 'lucide-react';
import '../../src/css/signup.css'; // Ensure the path is correct

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col">
      {/* Navigation */}
      <nav className="navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
              <Wallet className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">BromenWallet</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Sign Up Form */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Create Account</h2>
          <form className="space-y-6">
            <div>
              <label className="label">Full Name</label>
              <input
                type="text"
                className="input-field mt-1"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                className="input-field mt-1"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="label">Password</label>
              <input
                type="password"
                className="input-field mt-1"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="button">
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <button onClick={() => navigate('/login')} className="link-button">
              Log in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
