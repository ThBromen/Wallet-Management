import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet } from 'lucide-react';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Account created successfully!');
        navigate('/login');
      } else {
        alert(data.msg || 'Signup failed!');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <div>
      {/* Navigation */}
      <nav id="navigationlog">
        <div onClick={() => navigate('/')}>
          <Wallet id="nn" />
          <span id="bb">BromenWallet</span>
        </div>
      </nav>

      {/* Sign Up Form */}
      <div className="foamsignup">
        <h2>Create Account</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="label">Full Name</label>
            <input
              type="text"
              name="name"
              className="signinput"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="signinput"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="signinput"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="button">
            Sign Up
          </button>
        </form>
        <p className="signpar">
          Already have an account?{' '}
          <button onClick={() => navigate('/login')} className="link-button">
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
