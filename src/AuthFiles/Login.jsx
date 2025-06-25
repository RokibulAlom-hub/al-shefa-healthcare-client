import { useState } from "react";
import { useForm } from "react-hook-form";
import { Heart, Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import GoogleLogin from "../Hooks/GoogleLogin";
import useAuth from "../Hooks/useAuth";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { userLogin } = useAuth();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const handlePrefill = (role) => {
    const credentials = {
      admin: { email: "rokibbhai@gmail.com", password: "Pa$$w0rd!" },
      doctor: { email: "farukDoc@gmail.com", password: "Pa$$w0rd!" },
      pharmacist: { email: "miyadupharam@gmail.com", password: "Pa$$w0rd!" },
      patient: { email: "prabirDada@gmail.com", password: "Pa$$w0rd!" },
    };
    const userCred = credentials[role];
    if (userCred) {
      setValue("email", userCred.email);
      setValue("password", userCred.password);
    }
  };

  const onSubmit = async (data) => {
    try {
      await userLogin(data.email, data.password);
      alert.success("Logged in successfully");
    } catch (error) {
      alert.error(`Login failed: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-section-bg py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="flex flex-col items-center">
          <div className="bg-primary-btn p-3 rounded-full">
            <Heart className="h-6 w-6 text-btn-text" />
          </div>
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-primary-text">
            Welcome Back Log In
          </h2>
        </div>

        {/* Prefill Buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          {["admin", "doctor", "pharmacist", "patient"].map((role) => (
            <button
              key={role}
              type="button"
              className="bg-secondary-btn text-btn-text px-3 py-1 rounded-lg text-sm hover:bg-hover transition-colors"
              onClick={() => handlePrefill(role)}
              aria-label={`Prefill as ${role}`}
            >
              {role.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-card-bg p-6 rounded-xl shadow-lg space-y-4"
        >
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary-text" />
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                })}
                className="w-full pl-10 pr-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-btn"
                placeholder="Enter your email"
              />
            </div>
            {errors.email && (
              <p className="text-error text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary-text" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full pl-10 pr-12 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-btn"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-secondary-text" />
                ) : (
                  <Eye className="h-5 w-5 text-secondary-text" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-error text-xs mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary-btn text-btn-text rounded-lg text-sm font-medium hover:bg-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-btn transition"
          >
            Sign In
          </button>

          {/* Google Login */}
          <div className="flex justify-center">
            <GoogleLogin />
          </div>

          {/* Register Link */}
          <p className="text-center text-sm text-secondary-text">
            Don’t have an account?{" "}
            <Link to="/register" className="text-link hover:text-hover">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;