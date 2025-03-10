interface CartProps {
  id: number;
  images: string;
  name: string;
  price: number;
  quantity: number;
  selected: boolean;
  onQuantityChange?: (id: number, newQuantity: number) => void;
  onSelectChange?: (id: number, isSelected: boolean) => void;
}

const Cart = ({
  id,
  images,
  name,
  price,
  quantity,
  selected,
  onQuantityChange,
  onSelectChange,
}: CartProps) => {
  const handleIncrease = () => {
    if (onQuantityChange) {
      onQuantityChange(id, quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1 && onQuantityChange) {
      onQuantityChange(id, quantity - 1);
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSelectChange) {
      onSelectChange(id, e.target.checked);
    }
  };

  return (
    <div className="flex bg-white p-4 rounded-lg shadow-gray-300 shadow-lg mb-5 items-center">
      {/* Checkbox untuk memilih item */}
      <input
        type="checkbox"
        checked={selected}
        onChange={handleSelectChange}
        className="mr-4"
      />
      <img
        src={images}
        alt={name}
        className="w-1/4 object-cover rounded mb-10"
      />
      <div className="flex flex-col justify-center pl-4">
        <h2 className="text-sm font-semibold">{name}</h2>
        <p className="text-sm">Rp {(price * quantity).toLocaleString()}</p>
        <div className="flex gap-2 rounded overflow-hidden">
          <div className="flex bg-gray-200 gap-2 px-2 rounded items-center mt-3">
            <button
              className="bg-gray-200 hover:bg-gray-300 px-1 py-0 rounded"
              onClick={handleDecrease}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="bg-gray-200 hover:bg-gray-300 px-1 py-1 rounded"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
