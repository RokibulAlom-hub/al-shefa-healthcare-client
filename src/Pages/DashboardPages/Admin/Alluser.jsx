import { useEffect, useState } from "react";

const Alluser = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:7000/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        console.error("Failed to fetch user role:", error);
      });
  }, []);
  //role change update operation 
  const handleRoleChange = async (userId, newRole) => {
    try {
      const response = await fetch(`http://localhost:7000/update-role/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role: newRole }),
      });

      if (response.ok) {
        setUsers(users.map(user => 
          user?._id === userId ? { ...user, role: newRole } : user
        ));
      } else {
        console.error("Failed to update role");
      }
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };

  if (!users) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Users ({users.length})</h2>
      
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-3 text-left">Name</th>
              <th className="border border-gray-300 p-3 text-left">Email</th>
              <th className="border border-gray-300 p-3 text-left">Phone</th>
              <th className="border border-gray-300 p-3 text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50">
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
                    <option value="pharmasict">Pharmasicts</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {users.map((user, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
            <div className="font-semibold text-lg mb-2">{user.name}</div>
            <div className="space-y-1">
              <div><span className="font-medium">Email:</span> {user.email}</div>
              <div><span className="font-medium">Phone:</span> {user.phone}</div>
              <div>
                <span className="font-medium">Role:</span> 
                <select 
                  value={user.role} 
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                  className="ml-2 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="moderator">Moderator</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alluser;