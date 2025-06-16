import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Doctors = () => {
  const [doctors, setDoctors] = useState(null);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    const fetchDoctors = async() => {
     const response = await axiosSecure.get(`/doc-pharma?role=doctor`)
     setDoctors(response?.data)
    }
    fetchDoctors()
  }, [axiosSecure]);

  if (!doctors) {
    return <div className="p-4">Loading...</div>;
  }
console.log(doctors);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Doctors ({doctors.length})</h2>
      
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-3 text-left">#</th>
              <th className="border border-gray-300 p-3 text-left">Name</th>
              <th className="border border-gray-300 p-3 text-left">Email</th>
              <th className="border border-gray-300 p-3 text-left">Qualification</th>
              <th className="border border-gray-300 p-3 text-left">Specialization</th>
              <th className="border border-gray-300 p-3 text-left">Experience</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-3">{index+1}</td>
                <td className="border border-gray-300 p-3">{doctor.name}</td>
                <td className="border border-gray-300 p-3">{doctor.email}</td>
                <td className="border border-gray-300 p-3">{doctor.qualification}</td>
                <td className="border border-gray-300 p-3">{doctor.specialization}</td>
                <td className="border border-gray-300 p-3">{doctor.experience} years</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {doctors.map((doctor, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
            <div className="font-semibold text-lg mb-2">{doctor.name}</div>
            <div className="space-y-1">
              <div><span className="font-medium">Email:</span> {doctor.email}</div>
              <div><span className="font-medium">Qualification:</span> {doctor.qualification}</div>
              <div><span className="font-medium">Specialization:</span> {doctor.specialization}</div>
              <div><span className="font-medium">Experience:</span> {doctor.experience} years</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;