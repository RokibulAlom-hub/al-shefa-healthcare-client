import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import AppoinmentCard from "./AppoinmentCard";
import Mappoinments from "./Mappoinments";
import useAuth from "../../../Hooks/useAuth";

const DoctorAppoinmentList = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth()
  const {
    data: appoinments,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["doctorAppoinment"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/appoinments?email=${user?.email}`);
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
      } else {
        console.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };
  const tableHeadValue = {
    Patient: "Patient",
    Doctor: "Doctor",
    Date: "Date",
    Time: "Time",
    Status: "Status",
  };
  if (isLoading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4">Error loading appointments</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        All Appoinments ({appoinments.length})
      </h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <AppoinmentCard
          appoinments={appoinments}
          onRolechange={(appoinmentId, newStatus) => {
            updateRoleChange(appoinmentId, newStatus);
          }}
          tableHeadValue={tableHeadValue}
        />
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        <Mappoinments
          appoinments={appoinments}
          onRolechange={(appoinmentId, newStatus) => {
            updateRoleChange(appoinmentId, newStatus);
          }}
        />
      </div>
    </div>
  );
};

export default DoctorAppoinmentList;
