const Mpharmacist = ({ pharamacists }) => {
  return (
    <>
      {pharamacists.map((pharmacist, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm"
        >
          <div className="font-semibold text-lg mb-2">{pharmacist?.name}</div>
          <div className="space-y-1">
            <div>
              <span className="font-medium">Email:</span> {pharmacist?.email}
            </div>
            <div>
              <span className="font-medium">Qualification:</span>{" "}
              {pharmacist?.qualification}
            </div>
            <div>
              <span className="font-medium">Specialization:</span>{" "}
              {pharmacist?.specialization}
            </div>
            <div>
              <span className="font-medium">Experience:</span>{" "}
              {pharmacist?.experience} years
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Mpharmacist;
