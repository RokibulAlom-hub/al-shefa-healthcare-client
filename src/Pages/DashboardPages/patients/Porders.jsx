const Porders = ({ allorders,  tableHeadValue }) => {
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
                {orderData?.status}
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Porders;
