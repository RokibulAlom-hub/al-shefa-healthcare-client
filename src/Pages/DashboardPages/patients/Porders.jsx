
const Porders = ({ allorders, tableHeadValue }) => {
  const { CustomerEmail, OrderDate, DeliveryAddress, Status } = tableHeadValue;

  return (
    <div className="p-4">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-3 text-left">Order ID</th>
            <th className="border border-gray-300 p-3 text-left">{CustomerEmail}</th>
            <th className="border border-gray-300 p-3 text-left">{OrderDate}</th>
            <th className="border border-gray-300 p-3 text-left">{DeliveryAddress}</th>
            <th className="border border-gray-300 p-3 text-left">Items</th>
            <th className="border border-gray-300 p-3 text-left">{Status}</th>
          </tr>
        </thead>
        <tbody>
          {allorders.map((orderData,index) => (
            <tr key={orderData._id} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-3">{index+1}</td>
              <td className="border border-gray-300 p-3">{orderData.customeremail}</td>
              <td className="border border-gray-300 p-3">
                {new Date(orderData.orderDate).toLocaleDateString()}
              </td>
              <td className="border border-gray-300 p-3">{orderData.deliveryAddress}</td>
              <td className="border border-gray-300 p-3">
                <ul className="list-disc pl-5">
                  {orderData.items.map((item, index) => (
                    <li key={index} className="text-sm">
                      {item.name} ({item.quantity} {item.unit}, ৳{item.pricePerUnit})
                    </li>
                  ))}
                </ul>
              </td>
              <td className="border border-gray-300 p-3">{orderData.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Porders;