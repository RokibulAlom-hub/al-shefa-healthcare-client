import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import DocPharmaCard from "./DoctorCard";
import Mdoctor from "./Mdoctor";


const Doctors = () => {
  const [doctors, setDoctors] = useState(null);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    const fetchDoctors = async () => {
      const response = await axiosSecure.get(`/doc-pharma?role=doctor`);
      setDoctors(response?.data);
    };
    fetchDoctors();
  }, [axiosSecure]);

  if (!doctors) {
    return <div className="p-4">Loading...</div>;
  }

  // console.log(doctors);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        All Doctors ({doctors.length})
      </h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <DocPharmaCard doctors={doctors} />
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        <Mdoctor doctors={doctors} />
      </div>
    </div>
  );
};

export default Doctors;
