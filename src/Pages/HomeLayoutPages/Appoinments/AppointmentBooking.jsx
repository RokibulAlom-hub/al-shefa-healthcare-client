import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
export default function AppointmentBooking() {
  const {_id} = useParams()
  const {user} = useAuth()
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      patientName: "",
      age: "",
      address: "",
      number: "",
      time: "",
      date: "",
      status: "pending",
    },
  });
  //get doctor data
  const {data:doctoData} = useQuery({
    queryKey:['singleDoctorData'],
    queryFn:async() => {
      const response =await axiosPublic.get(`/doctors?_id=${_id}`)
      return response.data
      
    }
  })
  
  const onSubmit = async (data) => {
    const finalData = { ...data,patientemail:user.email, doctorName:doctoData.name,doctoremail:doctoData.email };
    console.log(finalData);
    
    try {
      // Replace with your actual API endpoint
      const response = await axiosPublic.post(`/appoinments`, finalData);
      if (response) {
        alert('appoinment created')
        reset();
      } else {
        alert("failed to book");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Appoinment For Doctor <span className="text-green-500">
          {doctoData?.name} 
        </span>
      </h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Patient Name
            </label>
            <input
              {...register("patientName", {
                required: "Patient name is required",
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.patientName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.patientName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Age
            </label>
            <input
              type="number"
              {...register("age", {
                required: "Age is required",
                min: { value: 1, message: "Age must be positive" },
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.age && (
              <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            {...register("number", { required: "Phone number is required" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.number && (
            <p className="text-red-500 text-sm mt-1">{errors.number.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <textarea
            {...register("address", { required: "Address is required" })}
            rows="2"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">
              {errors.address.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="date"
              {...register("date", { required: "Date is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Time
            </label>
            <input
              type="time"
              {...register("time", { required: "Time is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.time && (
              <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmit(onSubmit)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        >Book Appoinment</button>
      </div>
    </div>
  );
}
