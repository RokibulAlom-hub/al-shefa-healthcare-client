
const Medicard = ({ sinlgemedi, addToCart }) => {
  const { medicineId, name, manufacturer, pricePerUnit, expiryDate} = sinlgemedi.medicine;

  return (
    <div
      key={medicineId}
      className="bg-card-bg rounded-lg shadow-sm p-4 border border-border hover:shadow-md transition-shadow"
      role="article"
      aria-labelledby={`${medicineId}-title`}
    >
      <h3 id={`${medicineId}-title`} className="text-base font-semibold text-primary-text mb-2">
        {name}
      </h3>
      <p className="text-sm text-secondary-text mb-1">{manufacturer}</p>
      <p className="text-sm text-secondary-text mb-1">
        Expires: {new Date(expiryDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
        })}
      </p>
      <p className={`text-sm mb-2 ${sinlgemedi?.status === "in stock" || sinlgemedi?.status === "low stock" ? "text-success" : "text-error"}`}>
        {sinlgemedi?.status}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-base font-bold text-success">${pricePerUnit}</span>
        <button
          onClick={() => addToCart(sinlgemedi.medicine)}
          disabled={!(sinlgemedi?.status === "in stock" || sinlgemedi?.status === "low stock")}
          className={`flex items-center gap-1 px-3 py-1 rounded text-btn-text ${
            sinlgemedi?.status === "in stock" || sinlgemedi?.status === "low stock"
              ? "bg-primary-btn hover:bg-hover"
              : "bg-gray-400 cursor-not-allowed"
          } transition`}
          aria-label={`Add ${name} to cart`}
        >
         
          Add
        </button>
      </div>
    </div>
  );
};

export default Medicard;