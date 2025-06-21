const Muser = ({ allUsers, onRolechange }) => {
  const handleRoleChange = (userId, newRole) => {
    if (onRolechange) {
      //onRolechange function take the data to parent
      onRolechange(userId, newRole);
    }
  };
  return (
    <>
      {allUsers?.map((user, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm"
        >
          <div className="font-semibold text-lg mb-2">{user.name}</div>
          <div className="space-y-1">
            <div>
              <span className="font-medium">#:</span> {index + 1}
            </div>
            <div>
              <span className="font-medium">Email:</span> {user?.email}
            </div>
            <div>
              <span className="font-medium">Phone:</span> {user?.firstName}
            </div>
            <div>
              <span className="font-medium">Phone:</span> {user?.phone}
            </div>
            <div>
              <span className="font-medium">Role:</span>
              <select
                value={user?.role}
                onChange={(e) => handleRoleChange(user?._id, e.target.value)}
                className="ml-2 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="admin">Admin</option>
                <option value="doctor">Doctor</option>
                <option value="patient">Patient</option>
                <option value="pharmasict">Pharmasicts</option>
              </select>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Muser;
