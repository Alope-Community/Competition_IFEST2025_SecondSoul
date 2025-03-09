import {
  IconBrandPaypal,
  IconCreditCard,
  IconWallet,
} from "@tabler/icons-react";
import { useLocation, Link } from "react-router-dom";
import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import CardCheckOut from "../component/CardCheckOut";

// CheckOutPage.tsx
interface CheckOutItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  images: string;
  selected: boolean;
}

interface CheckOutLocationState {
  selectedItems: CheckOutItem[];
}

const CheckOutPage: React.FC = () => {
  
  const location = useLocation();
  const state = location.state as CheckOutLocationState;
  const { selectedItems } = state || { selectedItems: [] };
  const totalPrice = selectedItems.reduce(
    (acc: number, item: CheckOutItem) =>
      acc + (item.selected ? item.price * item.quantity : 0),
    0
  );
  const shipping = 20000;
  const tax = totalPrice * 0.1;
  const total = totalPrice + shipping + tax;

  return (
    <>
      <Navbar />

      <div className="w-full min-h-screen bg-gray-50 py-8 lg:px-25 sm:px-10 px-5 sm:mt-20 mt-10">
        {/* Container */}
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Your Cart Items
          </h1>

          {
            selectedItems.map((product) => (
              <CardCheckOut key={product.id} {...product} />
            ))
          }

          {/* Main Content: Shipping & Order Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Shipping Address */}
            <div className="bg-white shadow rounded-md p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Alamat Pengiriman
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-600 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none "
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">Alamat</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none "
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-600 mb-1">Kota</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none "
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-1">Kode Pos</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none "
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="bg-white shadow rounded-md p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Order Summary
              </h2>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Subtotal</span>


                      <span className="text-gray-800 font-medium">        
                      {totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      })}</span>

              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Shipping</span>
                <span className="text-gray-800 font-medium">            
                      {shipping.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      })}
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Tax</span>
                <span className="text-gray-800 font-medium">
                {tax.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      })}
                </span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-800 font-semibold">Total</span>
                <span className="text-gray-800 font-bold">
                      {total.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      })}
                </span>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white shadow rounded-md p-4 mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Payment Method
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="border rounded-md p-4 flex items-center justify-center cursor-pointer">
                <span className="text-gray-800 font-medium">
                  <IconCreditCard />
                </span>
              </div>
              <div className="border rounded-md p-4 flex items-center justify-center cursor-pointer">
                <span className="text-gray-800 font-medium">
                  <IconBrandPaypal />
                </span>
              </div>
              <div className="border rounded-md p-4 flex items-center justify-center cursor-pointer">
                <span className="text-gray-800 font-medium">
                  <IconWallet />
                </span>
              </div>
            </div>
          </div>

          {/* Complete Purchase Button */}
          <div className="flex justify-center">
            <button className="bg-black text-white px-6 py-3 rounded-md font-semibold focus:outline-none">
              Selsaikan Pembayaran
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CheckOutPage;
