import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import PharmaCard from "./Desktoptable/PharmaCard";

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
        <PharmaCard pharamacists={pharamacists}/>
      </div>

      {/* Mobile Cards */}
      {/* <div className="md:hidden space-y-4">
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
      </div> */}
    </div>
  );
};

export default Pharamacist;