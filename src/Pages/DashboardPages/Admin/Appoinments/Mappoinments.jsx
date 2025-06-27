const Mappoinments = ({ appoinments, onRolechange }) => {
  const handleStatusChange = (appoinmentId, newStatus) => {
    if (onRolechange) {
      //onRolechange function take the data to parent
      onRolechange(appoinmentId, newStatus);
    }
  };
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
              {appoinmentData?.patientname}
            </div>
            <div>
              <span className="font-medium">Doctor:</span>{" "}
              {appoinmentData?.doctorname}
            </div>
            <div>
              <span className="font-medium">Date:</span> {appoinmentData?.date}
            </div>
            <div>
              <span className="font-medium">Time:</span> {appoinmentData?.time}
            </div>
            <div>
              <span className="font-medium">Status:</span>
              <select
                value={appoinmentData.status}
                 disabled={appoinmentData.status === "Cancelled"}
                onChange={(e) =>
                  handleStatusChange(appoinmentData?._id, e.target.value)
                }
                className="ml-2 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={appoinmentData?.status}>
                  {appoinmentData.status}
                </option>
                <option value="Confirmed">Confirmed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Mappoinments;
