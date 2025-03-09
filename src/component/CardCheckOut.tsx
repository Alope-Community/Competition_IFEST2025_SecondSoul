interface CardCheckOutProps {
    id: number;
    name: string;
    images: string;
    quantity: number;
    price: number;
}

const CardCheckOut = ({id, name, images, quantity, price }: CardCheckOutProps) => {

  const cardPrice = price * quantity;

  return (
    <>
    {/* Cart Items Section */}
    <div className="bg-white shadow rounded-md p-4 mb-8">
              {/* Single Cart Item */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between">
                  {/* Product Info */}
                  <div className="flex items-center mb-4 sm:mb-0">
                    {/* Product Image Placeholder */}
                    <div className="w-16 h-16 bg-gray-200 rounded mr-4 flex items-center justify-center">
                      <img src={images} alt="" />
                    </div>
                    {/* Product Details */}
                    <div>
                      <p className="font-semibold text-gray-800">{name}</p>
                      <p className="text-gray-600 text-sm">
                        Size: M | Color: Black
                      </p>
                      <p className="text-gray-600 text-sm">Qty: {quantity}</p>
                    </div>
                  </div>
                  {/* Price */}
                  <div className="text-gray-800 font-semibold">
                      {cardPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      })}
                  </div>
                </div>
    </div>
    </>
  )   

} 

export default CardCheckOut;