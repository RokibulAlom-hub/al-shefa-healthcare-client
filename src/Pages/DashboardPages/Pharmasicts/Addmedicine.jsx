import { useState } from "react";
import {
  Calendar,
  Package,
  DollarSign,
  Building,
  Mail,
  Pill,
} from "lucide-react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Addmedicine = () => {
  const axiosSecure = useAxiosSecure()
  const [formData, setFormData] = useState({
    pharmacistEmail: "",
    medicineId: "",
    name: "",
    manufacturer: "",
    quantity: "",
    unit: "box",
    expiryDate: "",
    pricePerUnit: "",
  });

  const units = ["box", "bottle", "strip", "piece", "ml", "mg", "tablet"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =async () => {
    const medicineData = {
      pharmacistEmail: formData.pharmacistEmail,
      medicine: {
        name: formData.name,
        manufacturer: formData.manufacturer,
        quantity: { $numberInt: formData.quantity },
        unit: formData.unit,
        expiryDate: formData.expiryDate,
        pricePerUnit: { $numberDouble: formData.pricePerUnit },
      },
      addedDate: new Date().toISOString().split("T")[0],//[0] = Takes the first part (just the date) ,Splits the string at "T"
      status: "in stock",
    };

    // console.log("Medicine data:", medicineData);
    // Add your API call here
    try {
      const response = await axiosSecure.post(`/medicine`, medicineData);
      if (response?.data) {
        alert("Medicine added successfully!");
        
      } else {
        alert("Failed to create profile");
      }
    } catch (error) {
      console.error("Error creating profile:", error);
      alert("Error creating profile");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Pill className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Add New Medicine
            </h1>
          </div>

          <div className="space-y-6">
            {/* Pharmacist Email */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 mr-2" />
                Pharmacist Email
              </label>
              <input
                type="email"
                name="pharmacistEmail"
                value={formData.pharmacistEmail}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter pharmacist email"
              />
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Medicine Details
              </h3>

              {/* Medicine  Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Medicine Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Azithromycin"
                  />
                </div>
              </div>

              {/* Manufacturer */}
              <div className="mb-4">
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Building className="w-4 h-4 mr-2" />
                  Manufacturer
                </label>
                <input
                  type="text"
                  name="manufacturer"
                  value={formData.manufacturer}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Pfizer"
                />
              </div>

              {/* Quantity and Unit */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Package className="w-4 h-4 mr-2" />
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Unit
                  </label>
                  <select
                    name="unit"
                    value={formData.unit}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {units.map((unit) => (
                      <option key={unit} value={unit}>
                        {unit.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Expiry Date and Price */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    Expiry Date
                  </label>
                  <input
                    type="date"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Price per Unit
                  </label>
                  <input
                    type="number"
                    name="pricePerUnit"
                    value={formData.pricePerUnit}
                    onChange={handleChange}
                    step="0.01"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 12.50"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 hover:transform hover:scale-105"
              >
                Add Medicine
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addmedicine;
