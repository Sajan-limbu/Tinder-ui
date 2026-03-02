import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("User Registered:", formData);

    // Redirect to Main Menu
    navigate("/main"); // change this if your route is different
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#FD267A] to-[#FF6036]">
      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl">
        
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FD267A] focus:border-[#FD267A] outline-none transition"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FD267A] focus:border-[#FD267A] outline-none transition"
              placeholder="example@email.com"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Gender
            </label>
            <select
              name="gender"
              required
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FD267A] focus:border-[#FD267A] outline-none transition"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FD267A] focus:border-[#FD267A] outline-none transition"
              placeholder="••••••••"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FD267A] focus:border-[#FD267A] outline-none transition"
              placeholder="••••••••"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#FD267A] to-[#FF6036] text-white font-semibold rounded-xl shadow-lg hover:scale-105 active:scale-95 transition duration-200"
          >
            Sign Up
          </button>

        </form>
      </div>
    </div>
  );
}

export default Register;