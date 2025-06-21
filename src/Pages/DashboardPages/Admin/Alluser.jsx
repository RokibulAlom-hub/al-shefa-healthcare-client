import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import UserCard from "./Desktoptable/UserCard.jsx";

const Alluser = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: allUsers,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const response = await axiosSecure.get("/users");
      return response.data;
    },
  });
  //role change update operation
  const updateRoleChange = async (userId, newRole) => {
    try {
      const response = await axiosSecure.patch(`/update-role/${userId}`, {
        newRole,
      });
      if (response.status === 200) {
       refetch()
      } else {
        console.error("Failed to update role");
      }
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };
  //this will be table head dynamic value 
  const tableHeadValue = {
    name:"Name", email:"Email", phone:"Phone" , role:"Role"
  }
  if (isLoading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4">Error loading appointments</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Users ({allUsers.length})</h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <UserCard allUsers={allUsers} onRolechange={(userId, newRole) => {
                updateRoleChange(userId,newRole)
        }} tableHeadValue={tableHeadValue}/>
      </div>

      {/* Mobile Cards */}
      {/* <div className="md:hidden space-y-4">
        {allUsers.map((user, index) => (
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
      </div> */}
    </div>
  );
};

export default Alluser;
