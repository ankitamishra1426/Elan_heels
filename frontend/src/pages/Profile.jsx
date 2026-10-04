import { useAuth } from "@/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, Mail, UserRound, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, isAuthenticated, logout, loading } = useAuth();
  const navigate = useNavigate();

  // Wait while AuthContext checks the JWT
  if (loading) {
    return (
      <main className="min-h-screen bg-[#faf9f7] px-5 py-24">
        <div className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
            Loading your profile...
          </p>
        </div>
      </main>
    );
  }

  // -----------------------------------------
  // NOT LOGGED IN
  // -----------------------------------------

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-[#faf9f7] px-5 py-24">
        <div className="mx-auto flex min-h-[75vh] max-w-2xl items-center justify-center">
          <div className="w-full text-center">

            {/* Brand */}
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gray-400">
              Élan Heels
            </p>

            {/* Heading */}
            <h1 className="font-serif text-4xl text-[#202020] md:text-5xl">
              Your Account
            </h1>

            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500">
              Sign in to access your profile, orders, wishlist and
              personalized Élan experience.
            </p>

            {/* Options */}
            <div className="mx-auto mt-10 grid max-w-md gap-4 sm:grid-cols-2">

              {/* Login */}
              <Link
                to="/login"
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-3
                  bg-[#202020]
                  px-6
                  py-4
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-white
                  transition
                  duration-300
                  hover:bg-[#3a3a3a]
                "
              >
                Login
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* Signup */}
              <Link
                to="/signup"
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-3
                  border
                  border-[#202020]
                  bg-transparent
                  px-6
                  py-4
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-[#202020]
                  transition
                  duration-300
                  hover:bg-[#202020]
                  hover:text-white
                "
              >
                Create Account
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>

            <p className="mt-8 text-xs text-gray-400">
              New to Élan? Create an account to get started.
            </p>

          </div>
        </div>
      </main>
    );
  }

  // -----------------------------------------
  // LOGGED IN
  // -----------------------------------------

  const handleLogout = () => {
    logout();

    toast.success("You have been logged out.");

    navigate("/profile");
  };

  return (
    <main className="min-h-screen bg-[#faf9f7] px-5 py-24">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-12">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gray-400">
            Élan Heels
          </p>

          <h1 className="font-serif text-4xl text-[#202020] md:text-5xl">
            My Profile
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Welcome back, {user.name}.
          </p>
        </div>

        {/* Profile Card */}
        <div className="border border-[#e5e1dc] bg-white">

          {/* Profile Header */}
          <div className="flex items-center gap-5 border-b border-[#e5e1dc] p-6 md:p-8">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#202020] text-white">
              <UserRound
                size={24}
                strokeWidth={1.5}
              />
            </div>

            <div>
              <h2 className="font-serif text-2xl text-[#202020]">
                {user.name}
              </h2>

              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-gray-400">
                {user.role === "admin" ? "Administrator" : "Customer"}
              </p>
            </div>

          </div>

          {/* User Information */}
          <div className="divide-y divide-[#e5e1dc]">

            {/* Name */}
            <div className="flex items-center gap-4 p-6 md:p-8">
              <UserRound
                size={20}
                strokeWidth={1.5}
                className="text-gray-400"
              />

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                  Full Name
                </p>

                <p className="mt-1 text-sm text-[#202020]">
                  {user.name}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 p-6 md:p-8">
              <Mail
                size={20}
                strokeWidth={1.5}
                className="text-gray-400"
              />

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                  Email Address
                </p>

                <p className="mt-1 text-sm text-[#202020]">
                  {user.email}
                </p>
              </div>
            </div>

          </div>

          {/* Actions */}
          <div className="border-t border-[#e5e1dc] p-6 md:p-8">

            <button
              onClick={handleLogout}
              className="
                flex
                items-center
                gap-3
                border
                border-[#202020]
                px-6
                py-3
                text-xs
                uppercase
                tracking-[0.2em]
                text-[#202020]
                transition
                duration-300
                hover:bg-[#202020]
                hover:text-white
              "
            >
              <LogOut
                size={16}
                strokeWidth={1.5}
              />

              Logout
            </button>

          </div>

        </div>

      </div>
    </main>
  );
};

export default Profile;