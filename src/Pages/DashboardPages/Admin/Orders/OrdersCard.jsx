const OrdersCard = ({ allorders, onRolechange, tableHeadValue }) => {
  // this function is for passing the data through props in parent component for update
  const handleStatusChange = (orderId, newStatus) => {
    if (onRolechange) {
      //onRolechange function take the data to parent
      onRolechange(orderId, newStatus);
    }
  };
  //destruct the table value here
  const { CustomerName, OrderDate, DeliveryAddress, Status } = tableHeadValue;
  return (
    <div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-3 text-left">#</th>
            <th className="border border-gray-300 p-3 text-left">
              {CustomerName}
            </th>
            <th className="border border-gray-300 p-3 text-left">
              {OrderDate}
            </th>
            <th className="border border-gray-300 p-3 text-left">
              {DeliveryAddress}
            </th>
            <th className="border border-gray-300 p-3 text-left">{Status}</th>
          </tr>
        </thead>
        <tbody>
          {allorders.map((orderData, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-3">{index + 1}</td>
              <td className="border border-gray-300 p-3">{orderData?.email}</td>
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
  );
};

export default OrdersCard;
