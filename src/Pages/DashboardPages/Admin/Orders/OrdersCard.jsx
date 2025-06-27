const OrdersCard = ({ allorders, onRolechange, tableHeadValue }) => {
  // this function is for passing the data through props in parent component for update
  const handleStatusChange = (orderId, newStatus) => {
    if (onRolechange) {
      //onRolechange function take the data to parent
      onRolechange(orderId, newStatus);
    }
  };
  //destruct the table value here
  const { CustomerPhone, OrderDate, DeliveryAddress, Status } = tableHeadValue;
  return (
    <div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-3 text-left">Order ID</th>
            <th className="border border-gray-300 p-3 text-left">
              {CustomerPhone}
            </th>
            <th className="border border-gray-300 p-3 text-left">
              {OrderDate}
            </th>
            <th className="border border-gray-300 p-3 text-left">
              {DeliveryAddress}
            </th>
            <th className="border border-gray-300 p-3 text-left">Items</th>
            <th className="border border-gray-300 p-3 text-left">{Status}</th>
          </tr>
        </thead>
        <tbody>
          {allorders.map((orderData, index) => (
            <tr key={orderData._id} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-3">{index + 1}</td>
              <td className="border border-gray-300 p-3">
                {orderData.customerPhone}
              </td>
              <td className="border border-gray-300 p-3">
                {new Date(orderData.orderDate).toLocaleDateString()}
              </td>
              <td className="border border-gray-300 p-3">
                {orderData.deliveryAddress}
              </td>
              <td className="border border-gray-300 p-3">
                <ul className="list-disc pl-5">
                  {orderData.items.map((item, index) => (
                    <li key={index} className="text-sm">
                      {item.name} ({item.quantity} {item.unit}, ৳
                      {item.pricePerUnit})
                    </li>
                  ))}
                </ul>
              </td>
              <td className="border border-gray-300 p-3">
                <select
                  value={orderData?.status}
                   disabled={orderData.status === "Cancelled"}
                  onChange={(e) =>
                    handleStatusChange(orderData?._id, e.target.value)
                  }
                  className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option >{orderData?.status}</option>
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
