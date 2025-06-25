live hosting link = "https://healthcareproject-f0b30.web.app/"
import { useState, useEffect } from 'react';
import { Search, Plus, Minus, Trash2 } from 'lucide-react';

export default function MedicineStore() {
  // State to store all medicines fetched from database
  const [medicines, setMedicines] = useState([]);
  
  // State to store filtered medicines based on search query
  const [filteredMedicines, setFilteredMedicines] = useState([]);
  
  // State to store cart items with quantities
  const [cart, setCart] = useState([]);
  
  // State to store current search term entered by user
  const [searchTerm, setSearchTerm] = useState('');
  
  // State to manage loading status while fetching data
  const [loading, setLoading] = useState(true);

  // Effect hook to fetch medicines data when component mounts
  // Runs only once after initial render
  useEffect(() => {
    fetchMedicines();
  }, []);

  // Effect hook to filter medicines whenever medicines array or search term changes
  // This creates a reactive search functionality
  useEffect(() => {
    // Filter medicines based on name or category matching search term (case insensitive)
    const filtered = medicines.filter(medicine =>
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Update filtered medicines state with search results
    setFilteredMedicines(filtered);
  }, [medicines, searchTerm]);

  /**
   * Async function to fetch medicines data from database
   * Handles API call with error fallback to mock data
   * Updates loading state to manage UI feedback
   */
  const fetchMedicines = async () => {
    try {
      // Make API call to get medicines from database
      // Replace '/api/medicines' with your actual endpoint
      const response = await fetch('/api/medicines');
      const data = await response.json();
      
      // Update both medicines and filtered medicines state with fetched data
      setMedicines(data);
      setFilteredMedicines(data);
    } catch (error) {
      // Log error for debugging purposes
      console.error('Error fetching medicines:', error);
      
      // Fallback to mock data if API call fails (for demo purposes)
      const mockData = [
        { id: 1, name: 'Paracetamol', category: 'Pain Relief', price: 5.99, image: '/api/placeholder/150/150' },
        { id: 2, name: 'Aspirin', category: 'Pain Relief', price: 8.50, image: '/api/placeholder/150/150' },
        { id: 3, name: 'Vitamin D', category: 'Supplements', price: 12.99, image: '/api/placeholder/150/150' },
        { id: 4, name: 'Cough Syrup', category: 'Cold & Flu', price: 7.25, image: '/api/placeholder/150/150' }
      ];
      
      // Set mock data as medicines if API fails
      setMedicines(mockData);
      setFilteredMedicines(mockData);
    } finally {
      // Always set loading to false regardless of success or failure
      setLoading(false);
    }
  };

  /**
   * Function to add medicine to cart or increase quantity if already exists
   * @param {Object} medicine - Medicine object with id, name, price, etc.
   */
  const addToCart = (medicine) => {
    // Update cart state using functional update to access previous cart state
    setCart(prevCart => {
      // Check if medicine already exists in cart by comparing IDs
      const existingItem = prevCart.find(item => item.id === medicine.id);
      
      if (existingItem) {
        // If medicine exists, increase its quantity by 1
        return prevCart.map(item =>
          item.id === medicine.id 
            ? { ...item, quantity: item.quantity + 1 } // Spread operator to maintain immutability
            : item
        );
      } else {
        // If medicine doesn't exist, add it to cart with quantity 1
        return [...prevCart, { ...medicine, quantity: 1 }];
      }
    });
  };

  /**
   * Function to update quantity of specific item in cart
   * @param {number} id - Medicine ID to update
   * @param {number} change - Amount to change quantity by (+1 or -1)
   */
  const updateQuantity = (id, change) => {
    setCart(prevCart => {
      // Map through cart items to find and update the specific medicine
      return prevCart.map(item => {
        if (item.id === id) {
          // Calculate new quantity by adding change to current quantity
          const newQuantity = item.quantity + change;
          // Only update if new quantity is positive
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item; // Return unchanged item if not the target
      }).filter(item => item.quantity > 0); // Remove items with zero or negative quantity
    });
  };

  /**
   * Function to completely remove an item from cart
   * @param {number} id - Medicine ID to remove
   */
  const removeFromCart = (id) => {
    // Filter out the item with matching ID from cart
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  /**
   * Function to calculate total price of all items in cart
   * @returns {string} - Total price formatted to 2 decimal places
   */
  const getTotalPrice = () => {
    // Use reduce to sum up (price * quantity) for each cart item
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  /**
   * Async function to place order by sending cart data to server
   * Clears cart on successful order placement
   */
  const placeOrder = async () => {
    try {
      // Prepare order data object with cart items, total, and timestamp
      const orderData = {
        items: cart,
        total: getTotalPrice(),
        orderDate: new Date().toISOString()
      };
      
      // Send POST request to server with order data
      // Replace '/api/orders' with your actual endpoint
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });
      
      // Check if order was successful
      if (response.ok) {
        alert('Order placed successfully!');
        setCart([]); // Clear cart after successful order
      }
    } catch (error) {
      // Handle any errors during order placement
      console.error('Error placing order:', error);
      alert('Failed to place order');
    }
  };

  // Show loading message while medicines are being fetched
  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading medicines...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Main heading for the medicine store */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Medicine Store</h1>
      
      {/* Main grid layout: 2/3 for medicines, 1/3 for cart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Medicine Section - Takes 2 columns out of 3 (2/3 width) */}
        <div className="lg:col-span-2">
          
          {/* Search functionality for filtering medicines */}
          <div className="relative mb-6">
            {/* Search icon positioned absolutely inside input */}
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search medicines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term on every keystroke
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Medicine grid layout - responsive columns based on screen size */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {/* Map through filtered medicines to create medicine cards */}
            {filteredMedicines.map(medicine => (
              <div key={medicine.id} className="bg-white rounded-lg shadow-md p-4 border">
                {/* Medicine image */}
                <img 
                  src={medicine.image} 
                  alt={medicine.name}
                  className="w-full h-32 object-cover rounded-md mb-3"
                />
                {/* Medicine name */}
                <h3 className="font-semibold text-gray-800">{medicine.name}</h3>
                {/* Medicine category */}
                <p className="text-sm text-gray-600 mb-2">{medicine.category}</p>
                {/* Price and Add button row */}
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-green-600">${medicine.price}</span>
                  {/* Add to cart button with icon */}
                  <button
                    onClick={() => addToCart(medicine)} // Call addToCart with current medicine
                    className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 flex items-center gap-1"
                  >
                    <Plus className="h-4 w-4" />
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Section - Takes 1 column out of 3 (1/3 width) */}
        <div className="bg-white rounded-lg shadow-md p-6 h-fit">
          {/* Cart header with item count */}
          <h2 className="text-xl font-bold text-gray-800 mb-4">Cart ({cart.length})</h2>
          
          {/* Conditional rendering: show empty message or cart items */}
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {/* Map through cart items to display each item */}
              {cart.map(item => (
                <div key={item.id} className="flex items-center justify-between border-b pb-3">
                  {/* Item details section */}
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-green-600 font-bold">${item.price}</p>
                  </div>
                  
                  {/* Quantity controls and remove button */}
                  <div className="flex items-center gap-2">
                    {/* Decrease quantity button */}
                    <button
                      onClick={() => updateQuantity(item.id, -1)} // Decrease by 1
                      className="p-1 text-gray-500 hover:text-red-600"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    
                    {/* Current quantity display */}
                    <span className="w-8 text-center">{item.quantity}</span>
                    
                    {/* Increase quantity button */}
                    <button
                      onClick={() => updateQuantity(item.id, 1)} // Increase by 1
                      className="p-1 text-gray-500 hover:text-green-600"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                    
                    {/* Remove item completely button */}
                    <button
                      onClick={() => removeFromCart(item.id)} // Remove entire item
                      className="p-1 text-gray-500 hover:text-red-600 ml-2"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
              
              {/* Cart summary and checkout section */}
              <div className="pt-4 border-t">
                {/* Total price display */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold">Total: ${getTotalPrice()}</span>
                </div>
                {/* Place order button */}
                <button
                  onClick={placeOrder} // Submit order to server
                  className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
                >
                  Place Order
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}