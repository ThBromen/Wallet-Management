import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Wallet, BarChart2, PieChart, Shield } from 'lucide-react';
import './index.css';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AboutPage from './pages/AboutPage';
import Dashboard from './pages/Dashboard';

// Reusable FeatureCard component
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="feature-card">
    <div className="icon-wrapper">
      <Icon className="icon" />
    </div>  
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
);

// Home page component
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Navigation Bar */}
      <nav className="navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => navigate('/')}
            >
              <Wallet className="h-8 w-8 text-blue-600" id='nn'/>
              <span className="ml-2 text-xl font-bold text-gray-800" id='bb'>BromenWallet</span>
            </div>
            <div className="flex gap-4">
              <button onClick={() => navigate('/login')} className="green-button">
                Login
              </button>
              <button onClick={() => navigate('/signup')} className="green-button">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Smart Financial Management at Your Fingertips
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Take control of your finances with our comprehensive wallet management system. 
            Track expenses, set budgets, and achieve your financial goals.
          </p>
          <button onClick={() => navigate('/signup')} className="b-button">
            Get Started Free
          </button>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20" id='my-line'>
          <FeatureCard 
            icon={BarChart2}
            title="Track Expenses"
            description="Monitor your spending across multiple accounts in one place. Get insights into your financial habits."
          />
          <FeatureCard
            icon={PieChart}
            title="Smart Budgeting"
            description="Set and manage budgets with intelligent alerts. Stay on top of your spending limits effortlessly."
          />
          <FeatureCard 
            icon={Shield}
            title="Secure & Private"
            description="Your financial data is protected with enterprise-grade security. Your privacy is our priority."
          />
        </div>

        {/* Call to Action Section */}
        <div className="cta-section text-center mt-20">
          <h2 className="cta-title text-3xl font-bold text-gray-900 mb-4">
            Ready to Take Control?
          </h2>
          <p className="cta-description text-gray-600 mb-6">
            Join thousands of users who are already managing their finances smarter.
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={() => navigate('/signup')} className="green-button">
              Sign Up Now
            </button>
            <button onClick={() => navigate('/about')} className="green-button">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer bg-gray-800 text-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <Wallet className="footer-icon h-6 w-6 text-blue-500" />
            <span className="ml-2 font-bold text-gray-100">BromenWallet</span>
          </div>
          <p className="mt-4 md:mt-0 text-sm">© 2025 BromenWallet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Main App component with routing
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/dashboard" element={<Dashboard />} /> {/* Add Dashboard Route */}
    </Routes>
  );
};

export default App;
