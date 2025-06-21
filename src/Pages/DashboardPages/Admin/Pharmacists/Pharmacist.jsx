import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import PharmaCard from "./PharmaCard";
import Mpharmacist from "./Mpharmacist";

const Pharamacist = () => {
  const [pharamacists, setpharamacists] = useState(null);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    const fetchPharma = async () => {
      const response = await axiosSecure.get(`/doc-pharma?role=pharmacist`);
      setpharamacists(response?.data);
    };
    fetchPharma();
  }, [axiosSecure]);

  if (!pharamacists) {
    return <div className="p-4">Loading...</div>;
  }
  // console.log(pharamacists);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        All Pharmacist({pharamacists.length})
      </h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <PharmaCard pharamacists={pharamacists} />
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        <Mpharmacist pharamacists={pharamacists} />
      </div>
    </div>
  );
};

export default Pharamacist;
