import { Plus, Minus, Trash2 } from "lucide-react";
const CartCard = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <div
      key={item.id}
      className="flex items-center justify-between border-b pb-3"
    >
      <div className="flex-1">
        <h4 className="font-medium text-sm">{item.name}</h4>
        <p className="text-green-600 font-bold">${item.pricePerUnit}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item.medicineId, -1)}
          className="p-1 text-gray-500 hover:text-red-600"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.medicineId, 1)}
          className="p-1 text-gray-500 hover:text-green-600"
        >
          <Plus className="h-4 w-4" />
        </button>
        <button
          onClick={() => removeFromCart(item.medicineId)}
          className="p-1 text-gray-500 hover:text-red-600 ml-2"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CartCard;