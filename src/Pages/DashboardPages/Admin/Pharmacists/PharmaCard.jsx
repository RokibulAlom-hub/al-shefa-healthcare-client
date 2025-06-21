const PharmaCard = ({  pharamacists }) => {
  return (
    <div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-3 text-left">#</th>
            <th className="border border-gray-300 p-3 text-left">Name</th>
            <th className="border border-gray-300 p-3 text-left">Email</th>
            <th className="border border-gray-300 p-3 text-left">
              Qualification
            </th>
            <th className="border border-gray-300 p-3 text-left">
              Specialization
            </th>
            <th className="border border-gray-300 p-3 text-left">Experience</th>
          </tr>
        </thead>
        <tbody>
          {pharamacists.map((singleValue, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-3">{index + 1}</td>
              <td className="border border-gray-300 p-3">{singleValue.name}</td>
              <td className="border border-gray-300 p-3">{singleValue.email}</td>
              <td className="border border-gray-300 p-3">
                {singleValue.qualification}
              </td>
              <td className="border border-gray-300 p-3">
                {singleValue.specialization}
              </td>
              <td className="border border-gray-300 p-3">
                {singleValue.experience} years
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PharmaCard;
