const Morders = ({ allorders, onRolechange }) => {
  const handleStatusChange = (orderId, newStatus) => {
    if (onRolechange) {
      //onRolechange function take the data to parent
      onRolechange(orderId, newStatus);
    }
  };
  return (
    <>
      {allorders.map((orderData, index) => (
        <div
          key={orderData._id}
          className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm"
        >
          <div className="font-semibold text-lg mb-2">
            Order ID: {index + 1}
          </div>
          <div className="space-y-1 text-sm">
            <div>
              <span className="font-medium">Customer Phone:</span>{" "}
              {orderData.customerPhone}
            </div>
            <div>
              <span className="font-medium">Order Date:</span>{" "}
              {new Date(orderData.orderDate).toLocaleDateString()}
            </div>
            <div>
              <span className="font-medium">Delivery Address:</span>{" "}
              {orderData.deliveryAddress}
            </div>
            <div>
              <span className="font-medium">Status:</span> {orderData.status}
            </div>
            <div>
              <span className="font-medium">Items:</span>
              <ul className="list-disc pl-5 mt-1">
                {orderData.items.map((item, index) => (
                  <li key={index} className="mt-1">
                    <p>
                      {item.name} ({item.quantity} {item.unit})
                    </p>
                    <p className="text-gray-600 text-xs">
                      Manufacturer: {item.manufacturer}, Price: ৳
                      {item.pricePerUnit}, Expiry: {item.expiryDate}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-medium">Status:</span>
              <select
                value={orderData?.status}
                onChange={(e) =>
                  handleStatusChange(orderData?._id, e.target.value)
                }
                className="ml-2 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Delivered">Delivered</option>
                <option value="Shipped">Shipped</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Morders;
