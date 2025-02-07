import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet, BarChart2, PieChart, Shield } from 'lucide-react';

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
    <div>
      {/* Navigation Bar */}
      <nav className="navigation">
        <div>
          <div>
            <div
              onClick={() => navigate('/')}
            >
              <Wallet id='nn'/>
              <span  id='bb'>BromenWallet</span>
            </div>
            <div className='navButton'>
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
      <div >
        <div id='descriptionCont'>
          <h1>
            Smart Financial Management at Your Fingertips
          </h1>
          <p>
            Take control of your finances with our comprehensive wallet management system. 
            Track expenses, set budgets, and achieve your financial goals.
          </p>
          <button onClick={() => navigate('/signup')} className="g-button">
            Get Started Free
          </button>
        </div>





        {/* Features Section */}
        <div id='my-line'>
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
        <div className='calls'>
          <h2>
            Ready to Take Control?
          </h2>
          <p>
            Join thousands of users who are already managing their finances smarter.
          </p>
          <div>
            <button onClick={() => navigate('/about')} className="a-button">
              Learn More
            </button>
          </div>
        </div>
      </div>


      {/* Footer */}
      <footer >
        <div className='footer' >
          <div className='footerlogo'>
          <Wallet id='nfooter'/>
          <span  id='bfooter'>BromenWallet</span>
          </div >
          <p className='footerp'>© 2025 Bromen.         All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
