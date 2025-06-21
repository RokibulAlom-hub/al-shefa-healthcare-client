import useAxiosSecure from "../../../../Hooks/useAxiosSecure.jsx";
import { useQuery } from "@tanstack/react-query";
import UserCard from "./UserCard.jsx";
import Muser from "./Muser.jsx";

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
      <div className="md:hidden space-y-4">
        <Muser allUsers={allUsers} onRolechange={(userId, newRole) => {
                updateRoleChange(userId,newRole)
        }} />
      </div>
    </div>
  );
};

export default Alluser;
