const Mdoctor = ({ doctors }) => {
  return (
    <>
      {doctors.map((doctor, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm"
        >
          <div className="font-semibold text-lg mb-2">{doctor?.name}</div>
          <div className="space-y-1">
            <div>
              <span className="font-medium">Email:</span> {doctor?.email}
            </div>
            <div>
              <span className="font-medium">Qualification:</span>{" "}
              {doctor?.qualification}
            </div>
            <div>
              <span className="font-medium">Specialization:</span>{" "}
              {doctor?.specialization}
            </div>
            <div>
              <span className="font-medium">Experience:</span>{" "}
              {doctor?.experience} years
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Mdoctor;
