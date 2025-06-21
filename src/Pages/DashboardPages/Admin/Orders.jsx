import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import OrdersCard from "./Desktoptable/OrdersCard";

const Orders = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: allorders,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allorders"],
    queryFn: async () => {
      const response = await axiosSecure.get("/orderMedi");
      return response.data;
    },
  });
  //status change update operation
  const updateStatusChange = async (orderId, newStatus) => {
    try {
      const response = await axiosSecure.patch(`/orderMedi/${orderId}`, {
        newStatus,
      });
      if (response.status === 200) {
        refetch();
      } else {
        console.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  if (isLoading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4">Error loading appointments</div>;
  const tableHeadValue = {
    CustomerName: "CustomerName",
    OrderDate: "OrderDate",
    DeliveryAddress: "DeliveryAddress",
    Status: "Status",
  };
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        All Orders ({allorders?.length})
      </h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <OrdersCard
          allorders={allorders}
          onRolechange={(orderId, newStatus) => {
            updateStatusChange(orderId, newStatus);
          }}
          tableHeadValue={tableHeadValue}
        />
      </div>

      {/* Mobile Cards */}
      {/* <div className="md:hidden space-y-4">
        {allorders.map((appoinmentData, index) => (
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

export default Orders;
