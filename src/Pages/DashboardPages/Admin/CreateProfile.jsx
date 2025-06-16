import { useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const CreateProfile = () => {
  const axiosPublic = useAxiosPublic();
  const [profileType, setProfileType] = useState("doctor");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    qualification: "",
    specialization: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const finalData = { ...formData, role: profileType };
    //crud operation for create profile
    try {
      const response = await axiosPublic.post(`/doc-pharma`, finalData);
      if (response?.data) {
        alert(`${profileType} profile created successfully!`);
        setFormData({
          name: "",
          email: "",
          qualification: "",
          specialization: "",
          experience: "",
        });
      } else {
        alert("Failed to create profile");
      }
    } catch (error) {
      console.error("Error creating profile:", error);
      alert("Error creating profile");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">
        Create {profileType === "doctor" ? "Doctor" : "Pharmacist"} Profile
      </h2>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Profile Type</label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="doctor"
              checked={profileType === "doctor"}
              onChange={(e) => setProfileType(e.target.value)}
              className="mr-2"
            />
            Doctor
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="pharmacist"
              checked={profileType === "pharmacist"}
              onChange={(e) => setProfileType(e.target.value)}
              className="mr-2"
            />
            Pharmacist
          </label>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Qualification</label>
          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            {profileType === "doctor" ? "Specialization" : "Area of Expertise"}
          </label>
          <input
            type="text"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            required
            placeholder={
              profileType === "doctor"
                ? "e.g., Cardiology"
                : "e.g., Clinical Pharmacy"
            }
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Experience (years)
          </label>
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            min="0"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

      

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-200"
        >
          Create {profileType === "doctor" ? "Doctor" : "Pharmacist"} Profile
        </button>
      </div>
    </div>
  );
};

export default CreateProfile;
