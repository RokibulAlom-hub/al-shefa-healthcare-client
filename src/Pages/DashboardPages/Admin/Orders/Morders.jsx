
const Morders = ({allorders, onRolechange}) => {
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
            key={index}
            className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm"
          >
            <div className="font-semibold text-lg mb-2">
              {orderData?.email}
            </div>
            <div className="space-y-1">
              <div>
                <span className="font-medium">#:</span> {index + 1}
              </div>
              <div>
                <span className="font-medium">Email:</span>{" "}
                {orderData?.email}
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