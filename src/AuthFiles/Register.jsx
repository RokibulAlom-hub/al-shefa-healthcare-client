import { useState } from "react";
import { Heart, Eye, EyeOff, Mail, Lock, Phone, Calendar } from "lucide-react";
import useAuth from "../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUserbyMail } = useAuth();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      console.log(data);
      //this is create firebase registration
      const res = await createUserbyMail(data?.email, data.password);
      console.log("User created via auth service:", res);
      const alldata = { ...data, role: "patient" };
      const response = await axiosPublic.post(`/users`, alldata);
      if (!response.ok) {
        throw new Error("Failed to save user to DB");
      }

      alert("User created and saved to DB");
      console.log("DB response:", await response.json(), response);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 border border-black">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center">
            <div className="bg-blue-600 p-3 rounded-full">
              <Heart className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Create Your Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Join HealthCare+ for comprehensive health management
          </p>
        </div>

        {/* Register Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-6 bg-white p-8 rounded-xl shadow-lg"
        >
          {/*name div*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              {...register("firstName", { required: true })}
              type="text"
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your first name"
            />
            <input
              {...register("lastName", { required: true })}
              type="text"
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your last name"
            />
          </div>
          {/* email div */}
          <div className="mb-4">
            <input
              {...register("email", { required: true })}
              type="email"
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email address"
            />
          </div>
          {/* phone div */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              {...register("phone", { required: true })}
              type="tel"
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+1 (555) 123-4567"
            />
            <input
              {...register("dateOfBirth", { required: true })}
              type="date"
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* passward div */}
          <div className="relative">
            <input
              {...register("password", { required: true, minLength: 6 })}
              type={showPassword ? "text" : "password"}
              className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Create a strong password"
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

          <input
            type="submit"
            value="Create My Account"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          />

          {/* ... */}
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
