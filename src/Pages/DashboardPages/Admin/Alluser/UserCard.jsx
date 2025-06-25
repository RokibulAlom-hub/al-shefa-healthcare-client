const UserCard = ({allUsers, onRolechange,tableHeadValue}) => {
    // this function is for passing the data through props in parent component for update 
  const handleRoleChange = (userId, newRole) => {
    if (onRolechange) {
        //onRolechange function take the data to parent
        onRolechange(userId,newRole)
    }
  }
  //destruct the table value here 
  const {name,email,phone,role}= tableHeadValue
  return (
    <div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-3 text-left">#</th>
            <th className="border border-gray-300 p-3 text-left">{name}</th>
            <th className="border border-gray-300 p-3 text-left">{email}</th>
            <th className="border border-gray-300 p-3 text-left">{phone}</th>
            <th className="border border-gray-300 p-3 text-left">{role}</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-3">{index + 1}</td>
              <td className="border border-gray-300 p-3">{user?.firstName}</td>
              <td className="border border-gray-300 p-3">{user?.email}</td>
              <td className="border border-gray-300 p-3">{user?.phone}</td>
              <td className="border border-gray-300 p-3">
                <select
                  value={user?.role}
                  onChange={(e) => handleRoleChange(user?._id, e.target.value)}
                  className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="admin">Admin</option>
                  <option value="doctor">Doctor</option>
                  <option value="patient">Patient</option>
                  <option value="pharmacist">Pharmasicts</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserCard;