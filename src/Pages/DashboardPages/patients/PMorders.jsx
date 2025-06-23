const Morders = ({ allorders }) => {
  return (
    <>
      {allorders.map((orderData, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm"
        >
          <div className="font-semibold text-lg mb-2">{orderData?.email}</div>
          <div className="space-y-1">
            <div>
              <span className="font-medium">#:</span> {index + 1}
            </div>
            <div>
              <span className="font-medium">Email:</span> {orderData?.email}
            </div>
            <div>
              <span className="font-medium">OrderDate:</span>{" "}
              {orderData?.orderDate}
            </div>
            <div>
              <span className="font-medium">DeliveryAddress:</span>{" "}
              {orderData?.deliveryAddress}
            </div>

            <div>
              <span className="font-medium">Status:</span>
              {orderData?.status}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Morders;
