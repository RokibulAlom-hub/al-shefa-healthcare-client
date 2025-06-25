
const Morders = ({ allorders }) => {
  return (
    <div className="space-y-4 p-4">
      {allorders.map((orderData) => (
        <div
          key={orderData._id.$oid}
          className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm"
        >
          <div className="font-semibold text-lg mb-2">
            Order ID: {orderData._id.$oid}
          </div>
          <div className="space-y-1 text-sm">
            <div>
              <span className="font-medium">Customer Email:</span>{' '}
              {orderData.customeremail}
            </div>
            <div>
              <span className="font-medium">Order Date:</span>{' '}
              {new Date(orderData.orderDate).toLocaleDateString()}
            </div>
            <div>
              <span className="font-medium">Delivery Address:</span>{' '}
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
                    <p>{item.name} ({item.quantity} {item.unit})</p>
                    <p className="text-gray-600 text-xs">
                      Manufacturer: {item.manufacturer}, Price: ৳{item.pricePerUnit}, Expiry: {item.expiryDate}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Morders;