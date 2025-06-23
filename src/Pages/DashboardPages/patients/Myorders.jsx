import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Morders from "../Admin/Orders/Morders";
import Porders from "./Porders";

const Myorders = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth()
  const {
    data: allorders,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allorders"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/orderMedi?email=${user?.email}`);
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
        My Orders ({allorders?.length})
      </h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <Porders
          allorders={allorders}
          onRolechange={(orderId, newStatus) => {
            updateStatusChange(orderId, newStatus);
          }}
          tableHeadValue={tableHeadValue}
        />
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        <Morders
          allorders={allorders}
          onRolechange={(orderId, newStatus) => {
            updateStatusChange(orderId, newStatus);
          }}
        />
      </div>
    </div>
  );
};

export default Myorders;
