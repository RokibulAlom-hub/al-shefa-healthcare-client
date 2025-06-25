const PappoinCard = ({
   appoinments
}) => {

  return (
    <div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-3 text-left">#</th>
            <th className="border border-gray-300 p-3 text-left">Patient</th>
            <th className="border border-gray-300 p-3 text-left">Doctor</th>
            <th className="border border-gray-300 p-3 text-left">Date</th>
            <th className="border border-gray-300 p-3 text-left">Time</th>
            <th className="border border-gray-300 p-3 text-left">Status</th>
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
                  {appoinmentData?.status}
                </td>
              </tr>
            ))}
          </tbody>
      </table>
    </div>
  );
};

export default PappoinCard;