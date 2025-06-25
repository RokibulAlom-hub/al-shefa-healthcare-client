
const PharmaCard = ({ pharamacists }) => {
  return (
    <div className="p-4">
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 p-2 text-left">#</th>
            <th className="border border-gray-200 p-2 text-left">Name</th>
            <th className="border border-gray-200 p-2 text-left">Email</th>
            <th className="border border-gray-200 p-2 text-left">Phone</th>
            <th className="border border-gray-200 p-2 text-left">Experience</th>
            <th className="border border-gray-200 p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {pharamacists?.map((pharmacist, index) => (
            <tr key={pharmacist?._id} className="hover:bg-gray-50">
              <td className="border border-gray-200 p-2">{index + 1}</td>
              <td className="border border-gray-200 p-2">{pharmacist?.name}</td>
              <td className="border border-gray-200 p-2">{pharmacist?.email}</td>
              <td className="border border-gray-200 p-2">{pharmacist?.phone}</td>
             
              <td className="border border-gray-200 p-2">
                {pharmacist?.experienceYears} years
              </td>
              <td className="border border-gray-200 p-2">{pharmacist?.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PharmaCard;