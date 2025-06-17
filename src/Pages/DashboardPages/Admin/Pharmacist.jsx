import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Pharamacist = () => {
  const [pharamacists, setpharamacists] = useState(null);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    const fetchPharma = async() => {
     const response = await axiosSecure.get(`/doc-pharma?role=pharmacist`)
     setpharamacists(response?.data)
    }
    fetchPharma()
  }, [axiosSecure]);

  if (!pharamacists) {
    return <div className="p-4">Loading...</div>;
  }
// console.log(pharamacists);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Pharmacist({pharamacists.length})</h2>
      
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
            {pharamacists.map((pharmacist, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-3">{index+1}</td>
                <td className="border border-gray-300 p-3">{pharmacist.name}</td>
                <td className="border border-gray-300 p-3">{pharmacist.email}</td>
                <td className="border border-gray-300 p-3">{pharmacist.qualification}</td>
                <td className="border border-gray-300 p-3">{pharmacist.specialization}</td>
                <td className="border border-gray-300 p-3">{pharmacist.experience} years</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {pharamacists.map((pharmacist, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
            <div className="font-semibold text-lg mb-2">{pharmacist.name}</div>
            <div className="space-y-1">
              <div><span className="font-medium">Email:</span> {pharmacist.email}</div>
              <div><span className="font-medium">Qualification:</span> {pharmacist.qualification}</div>
              <div><span className="font-medium">Specialization:</span> {pharmacist.specialization}</div>
              <div><span className="font-medium">Experience:</span> {pharmacist.experience} years</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pharamacist;