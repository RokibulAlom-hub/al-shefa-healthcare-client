import { useState } from "react";
import { Heart, Eye, EyeOff } from "lucide-react";
import useAuth from "../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUserbyMail } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await createUserbyMail(data.email, data.password);
      const alldata = { ...data, role: "patient" };
      const response = await axiosPublic.post("/users", alldata);
      if (response.status !== 200) {
        throw new Error("Failed to save user to DB");
      }
      alert("User created and saved to DB");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-section-bg">
      <div className="max-w-2xl w-full space-y-8 border border-border rounded-xl bg-card-bg p-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center">
            <div className="bg-primary-btn p-3 rounded-full">
              <Heart className="h-8 w-8 text-btn-text" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-primary-text">
            Create Your Account
          </h2>
          <p className="mt-2 text-sm text-secondary-text">
            Join HealthCare+ for comprehensive health management
          </p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              {...register("firstName", { required: true })}
              type="text"
              className="w-full px-3 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-btn"
              placeholder="Enter your first name"
            />
            <input
              {...register("lastName", { required: true })}
              type="text"
              className="w-full px-3 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-btn"
              placeholder="Enter your last name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              {...register("email", { required: true })}
              type="email"
              className="w-full pl-10 pr-3 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-btn"
              placeholder="Enter your email address"
            />
          </div>

          {/* Phone and DOB */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              {...register("phone", { required: true })}
              type="tel"
              className="w-full pl-10 pr-3 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-btn"
              placeholder="+1 (555) 123-4567"
            />
            <input
              {...register("dateOfBirth", { required: true })}
              type="date"
              className="w-full pl-10 pr-3 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-btn"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              {...register("password", { required: true, minLength: 6 })}
              type={showPassword ? "text" : "password"}
              className="w-full pl-10 pr-12 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-btn"
              placeholder="Create a strong password"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-secondary-text hover:text-hover" />
              ) : (
                <Eye className="h-5 w-5 text-secondary-text hover:text-hover" />
              )}
            </button>
          </div>

          {/* Submit */}
          <input
            type="submit"
            value="Create My Account"
            className="w-full py-3 px-4 rounded text-btn-text bg-primary-btn hover:bg-hover cursor-pointer"
          />
           {/* Register Link */}
          <p className="text-center text-sm text-secondary-text">
            Already have an account?{" "}
            <Link to="/login" className="text-link hover:text-hover">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
