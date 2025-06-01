import { useState } from "react";
import { useForm } from "react-hook-form";
import { Heart, Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import GoogleLogin from "../Hooks/GoogleLogin";
import useAuth from "../Hooks/useAuth";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {userLogin} = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors }, // Not used since you don’t want to show errors
  } = useForm();

  const onSubmit = (data) => {
    // Add your login logic here
    userLogin(data?.email,data?.password)
    .then((res) => {
      console.log(res);
      alert('user logged in')
    })
    .catch((error) => {
        alert("Error", error.message, "error");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="flex justify-center">
          <div className="bg-blue-600 p-3 rounded-full">
            <Heart className="h-8 w-8 text-white" />
          </div>
        </div>
        <h2 className="mt-6 text-3xl text-center font-extrabold text-gray-900">
          Welcome Back
        </h2>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-6 bg-white p-8 rounded-xl shadow-lg"
        >
          <div className="space-y-4">
            {/* Email Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                {...register("email", { required: true })}
                type="email"
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                {...register("password", { required: true, minLength: 6 })}
                type={showPassword ? "text" : "password"}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
            >
              Sign In to Your Account
            </button>
          </div>

          {/* Social Login Options */}
          <div className="grid grid-cols-2 gap-3">
            <GoogleLogin />
          </div>

          {/* Register Link */}
          <div className="text-center">
            <Link to="/register" className="text-sm text-gray-600">
              Don't have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
