import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { signupUser } from "@/services/authService";
import toast from "react-hot-toast";
import {useAuth} from "@/context/AuthContext";
const Signup = () => {
  const {login} = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await signupUser(formData);
      login(response.user, response.token);
      toast.success("Account created successfully!");

      navigate("/");
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Unable to create account";

      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#faf9f7] px-5 py-16">
      <div className="mx-auto flex min-h-[80vh] max-w-md items-center justify-center">
        <div className="w-full">

          {/* Heading */}
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gray-400">
              Élan Heels
            </p>

            <h1 className="font-serif text-4xl text-[#202020]">
              Create Account
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              Join Élan and discover timeless elegance.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-gray-500">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full border-b border-gray-300 bg-transparent px-1 py-3 text-sm outline-none transition focus:border-black"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-gray-500">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full border-b border-gray-300 bg-transparent px-1 py-3 text-sm outline-none transition focus:border-black"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-gray-500">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                  minLength={6}
                  className="w-full border-b border-gray-300 bg-transparent px-1 py-3 pr-10 text-sm outline-none transition focus:border-black"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-5 flex w-full items-center justify-center gap-3 bg-[#202020] py-4 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-[#3a3a3a] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Creating Account..." : "Create Account"}

              {!loading && <ArrowRight size={16} />}
            </button>
          </form>

          {/* Login */}
          <p className="mt-8 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-black underline underline-offset-4"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Signup;