import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, Eye, EyeOff, Wallet } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState({ text: "", type: "" }); // State for inline messages
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: "", type: "" }); // Reset message before submission

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ text: "Login successful! Redirecting...", type: "success" });
        localStorage.setItem("token", data.token);
        setTimeout(() => navigate("/dashboard"), 1500); // Redirect after delay
      } else {
        setMessage({ text: data.msg || "Invalid email or password", type: "error" });
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage({ text: "Something went wrong!", type: "error" });
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
        <div onClick={() => navigate("/")}>
          <Wallet id="nn" />
          <span id="bb">BromenWallet</span>
        </div>
      </nav>

      <div className="foamsignup">
        <h2>Please sign in to continue</h2>

        {/* Inline Message Display */}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="label">
              Email
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
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
            <label htmlFor="password" className="label">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
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
          
          {message.text && (
          <div className={`message ${message.type === "success" ? "success" : "error"}`}>
            {message.text}
          </div>
        )}
          {/* Forgot Password Link */}
          <div className="text-right">
            <button type="button" className="forgotPass" onClick={() => navigate("/ForgotPassword")}>
              Forgot Password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150"
          >
            Sign In
          </button>

          {/* Signup Link */}
          <div className="text-center text-sm">
            <span className="text-gray-600">Don't have an account? </span>
            <button onClick={() => navigate("/signup")} className="link-button">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
