const PMappoinCard = ({ appoinments }) => {
  
  return (
    <>
      {appoinments.map((appoinmentData, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm"
        >
          <div className="font-semibold text-lg mb-2">
            {appoinmentData.name}
          </div>
          <div className="space-y-1">
            <div>
              <span className="font-medium">#:</span> {index + 1}
            </div>
            <div>
              <span className="font-medium">Patient:</span>{" "}
              {appoinmentData?.patientName}
            </div>
            <div>
              <span className="font-medium">Doctor:</span>{" "}
              {appoinmentData?.doctorName}
            </div>
            <div>
              <span className="font-medium">Date:</span>{" "}
              {appoinmentData?.appointmentDate}
            </div>
            <div>
              <span className="font-medium">Time:</span>{" "}
              {appoinmentData?.appointmentTime}
            </div>
            <div>
              <span className="font-medium">Status:</span>
              {appoinmentData?.status}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PMappoinCard;
