const AppoinmentCard = ({
   appoinments,
  onRolechange,
  tableHeadValue,
}) => {
  // this function is for passing the data through props in parent component for update
  const handleStatusChange = (appoinmentId, newStatus) => {
    if (onRolechange) {
      //onRolechange function take the data to parent
      onRolechange(appoinmentId, newStatus);
    }
  };
  //destruct the table value here
  const { Patient,Doctor, Date, Time, Status } = tableHeadValue;
  return (
    <div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-3 text-left">#</th>
            <th className="border border-gray-300 p-3 text-left">{Patient}</th>
            <th className="border border-gray-300 p-3 text-left">{Doctor}</th>
            <th className="border border-gray-300 p-3 text-left">{Date}</th>
            <th className="border border-gray-300 p-3 text-left">{Time}</th>
            <th className="border border-gray-300 p-3 text-left">{Status}</th>
          </tr>
        </thead>
        <tbody>
            {appoinments.map((appoinmentData, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-3">{index + 1}</td>
                <td className="border border-gray-300 p-3">
                  {appoinmentData?.patientname}
                </td>
                <td className="border border-gray-300 p-3">
                  {appoinmentData?.doctorname}
                </td>
                <td className="border border-gray-300 p-3">
                  {appoinmentData?.date}
                </td>
                <td className="border border-gray-300 p-3">
                  {appoinmentData?.time}
                </td>
                <td className="border border-gray-300 p-3">
                  <select
                    value={appoinmentData.status}
                    onChange={(e) =>
                      handleStatusChange(appoinmentData?._id, e.target.value)
                    }
                    disabled={appoinmentData.status === "Cancelled"}
                    className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value={appoinmentData?.status}>{appoinmentData.status}</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
      </table>
    </div>
  );
};

export default AppoinmentCard;
