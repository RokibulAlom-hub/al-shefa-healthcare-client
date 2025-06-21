import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import AppoinmentCard from "./Desktoptable/AppoinmentCard";

const Appoinment = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: appoinments,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["appoinments"],
    queryFn: async () => {
      const response = await axiosSecure.get("/appoinments");
      return response?.data;
    },
  });

  //status change update operation
  const updateRoleChange = async (appoinmentId, newStatus) => {
    try {
      const response = await axiosSecure.patch(
        `/update-appoinment/${appoinmentId}`,
        { newStatus }
      );
       if (response.status === 200) {
      console.log("Status updated:", response.data);
      refetch(); // this will now trigger a fresh data fetch
    }  else {
        console.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };
   const tableHeadValue = {
    Patient:"Patient",Doctor:"Doctor", Date:"Date", Time:"Time" , Status:"Status"
  }
  if (isLoading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4">Error loading appointments</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        All Appoinments ({appoinments.length})
      </h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <AppoinmentCard appoinments={appoinments} onRolechange={(appoinmentId, newStatus) => {
                updateRoleChange(appoinmentId, newStatus)
        }} tableHeadValue={tableHeadValue}/>
       
      </div>

      {/* Mobile Cards */}
      {/* <div className="md:hidden space-y-4">
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
                <span className="font-medium">Email:</span>{" "}
                {appoinmentData?.patientName}
              </div>
              <div>
                <span className="font-medium">Phone:</span>{" "}
                {appoinmentData?.doctorName}
              </div>
              <div>
                <span className="font-medium">Phone:</span>{" "}
                {appoinmentData?.appointmentDate}
              </div>
              <div>
                <span className="font-medium">Phone:</span>{" "}
                {appoinmentData?.appointmentTime}
              </div>
              <div>
                <span className="font-medium">Role:</span>
                <select
                  value={appoinmentData.status}
                  onChange={(e) =>
                    handleStatusChange(appoinmentData.id, e.target.value)
                  }
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

export default Appoinment;
