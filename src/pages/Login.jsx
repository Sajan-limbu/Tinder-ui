import { Link, useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#FD267A] to-[#FF6036]">
      <div className="bg-white p-8 ml-10 rounded-2xl shadow-xl w-90 text-center h-100 ">
        <h1 className="text-2xl font-bold mb-10">Welcome To Tinder</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border-gray-300 mb-6 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD267A] focus:border-[#FD267A]"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-10 p-2 border border-gray-300 rounded-lg
             focus:outline-none focus:ring-2 focus:ring-[#FD267A] focus:border-[#FD267A]"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-[#FD267A] to-[#FF6036] text-white mb-3 py-2 cursor-pointer rounded-lg hover:opacity-90"
        >
          Sign In
        </button>

        <p className="mt-4 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#FD267A] font-semibold">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;