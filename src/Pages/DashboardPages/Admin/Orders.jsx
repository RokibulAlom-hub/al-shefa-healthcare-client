import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

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
  const handleStatusChange = async (orderId, newStatus) => {
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

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        All Orders ({allorders?.length})
      </h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-3 text-left">#</th>
              <th className="border border-gray-300 p-3 text-left">
                CustomerName
              </th>
              <th className="border border-gray-300 p-3 text-left">
                OrderDate
              </th>
              <th className="border border-gray-300 p-3 text-left">
                DeliveryAddress
              </th>
              <th className="border border-gray-300 p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {allorders.map((orderData, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-3">{index + 1}</td>
                <td className="border border-gray-300 p-3">
                  {orderData?.email}
                </td>
                <td className="border border-gray-300 p-3">
                  {orderData?.orderDate}
                </td>
                <td className="border border-gray-300 p-3">
                  {orderData?.deliveryAddress}
                </td>

                <td className="border border-gray-300 p-3">
                  <select
                    value={orderData?.status}
                    onChange={(e) =>
                      handleStatusChange(orderData?._id, e.target.value)
                    }
                    className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Delivered">Delivered</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
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
      </div>
    </div>
  );
};

export default Orders;
