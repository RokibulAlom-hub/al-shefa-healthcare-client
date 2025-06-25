import { Plus } from "lucide-react";

const Medicard = ({ sinlgemedi, addToCart }) => {
  return (
    <div
      key={sinlgemedi.medicine?.medicineId}
      className="bg-white rounded-lg shadow-md p-4 border"
    >
      <img
        src={sinlgemedi.medicine?.image}
        alt={sinlgemedi.medicine?.name}
        className="w-full h-32 object-cover rounded-md mb-3"
      />
      <h3 className="font-semibold text-gray-800">
        {sinlgemedi.medicine?.name}
      </h3>
      <p className="text-sm text-gray-600 mb-2">
        {sinlgemedi.medicine?.manufacturer}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-green-600">
          ${sinlgemedi.medicine?.pricePerUnit}
        </span>
        <button
          onClick={() => addToCart(sinlgemedi.medicine)}
          className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 flex items-center gap-1"
        >
          <Plus className="h-4 w-4" />
          Add
        </button>
      </div>
    </div>
  );
};

export default Medicard;
