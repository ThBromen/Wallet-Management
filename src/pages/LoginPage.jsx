import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, Eye, EyeOff, Wallet } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        // Store the token in localStorage
        localStorage.setItem("token", data.token);
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        alert(data.msg || "Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong!");
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* Navigation */}
      <nav id="navigationlog">
        <div onClick={() => navigate('/')}>
          <Wallet id='nn'/>
          <span id='bb'>BromenWallet</span>
        </div>
      </nav>

      <div className="foamsignup">
        <h2>Please sign in to continue</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="label">Email</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="signinput"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="label">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="signinput"
                placeholder="Enter your password"
                required
              />
              <button 
                type="button" 
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150"
          >
            Sign In
          </button>

          <div className="text-center text-sm">
            <span className="text-gray-600">Don't have an account? </span>
            <button onClick={() => navigate('/signup')} className="link-button">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
