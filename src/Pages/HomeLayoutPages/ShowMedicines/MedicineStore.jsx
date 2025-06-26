import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Medicard from "./Medicard";
import CartCard from "./CartCard";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

export default function MedicineStore() {
  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [address, setaddress] = useState("");
  const [number, setNumber] = useState("");
  const axiosPublic = useAxiosPublic()
  const {user} = useAuth()
  const { data: medicines } = useQuery({
    queryKey: "getMedicine",
    queryFn: async () => {
      const response = await axiosPublic.get("/medicine");
      return response.data;
    },
  });
  // Filter medicines based on search
  useEffect(() => {
    const filtered = medicines?.filter((data) =>
      data.medicine?.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMedicines(filtered);
  }, [medicines, searchTerm]);

  const addToCart = (medicine) => {
    setCart((prevCart) => {
      const existingItem = prevCart?.find(
        (item) => item.medicineId === medicine.medicineId
      );
      if (existingItem) {
        alert("Item is already in the cart!");
        return prevCart;
      } else {
        return [...prevCart, { ...medicine, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (medicineId, change) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.medicineId === medicineId) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      });
    });
  };

  const removeFromCart = (medicineId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.medicineId !== medicineId)
    );
  };
  const placeOrder =async (e) => {
    e.preventDefault();
    const orderData = {
      items: cart, // Keep items as is
      orderDate : new Date().toISOString(),
      status :"pending",
      deliveryAddress:address,
      customeremail:user?.email,
      customerPhone:number
    };
    console.log(orderData);
      try {
      // Replace with your actual API endpoint
      const response = await axiosPublic.post(`/orderMedi`, orderData);
      if (response) {
        alert('order created')
      } else {
        alert("failed to book");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Medicine Store</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Medicine Section - 2 parts */}
        <div className="lg:col-span-2">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search medicines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Medicine Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredMedicines?.map((sinlgemedi) => (
              <Medicard sinlgemedi={sinlgemedi} addToCart={addToCart} />
            ))}
          </div>
        </div>

        {/* Cart Section - 1 part */}
        <div className="bg-white rounded-lg shadow-md p-6 h-fit">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Cart ({cart?.length})
          </h2>

          {cart?.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cart?.map((item) => (
                <CartCard
                  item={item}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                />
              ))}
              <div className="pt-4 border-t">
                <form onSubmit={placeOrder}>
                  <label htmlFor=""> Phone Number</label> <br />
                  <input type="text" placeholder="+48794487"  onChange={(e) => setNumber(e.target.value)}/> <br />
                  <label htmlFor="">Address:</label><br />
                  <textarea
                    onChange={(e) => setaddress(e.target.value)}
                    name="address"
                    rows={"3"}
                    placeholder="Gulshan 2 ,Dhaka"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full  text-white py-2 rounded-md bg-primary-btn hover:bg-hover"
                  >
                    Place Order
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
