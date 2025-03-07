import { IconCar, IconReload, IconShield } from "@tabler/icons-react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Detail = () => {
  const relatedProduct = [
    { name: "Produk Serupa", img: "/heroShop1.jpg", price: "$19.99" },
    { name: "Produk Serupa 2", img: "/card.jpg", price: "$19.99" },
    { name: "Produk Serupa 3", img: "/card1.jpg", price: "$19.99" },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-16  rounded-lg mt-10 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-200 w-full h-96 flex items-center justify-center rounded-lg overflow-hidden">
            <img
              src="/img/satu.jpg"
              alt="Product Image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-2">
            <h1 className="text-2xl font-bold">Detail Produk</h1>
            <p className="text-gray-500">(42 reviews)</p>
            <p className="text-3xl font-semibold my-3">$299.99</p>
            <p className="text-gray-600">
              Deskripsi detail produk ada di sini. Produk premium ini menawarkan
              kualitas dan fitur luar biasa yang menjadikannya menonjol dari
              pesaing.
            </p>

            <div className="flex flex-wrap items-center mt-4 space-x-4">
              <select className="border border-gray-400 px-10 py-2 rounded-md">
                {[1, 2, 3].map((num) => (
                  <option key={num}>{num}</option>
                ))}
              </select>
              <button className="bg-black text-white px-8 py-2 rounded-md hover:bg-zinc-900 hover:text-white">
                Add to Cart
              </button>
            </div>

            <div className="mt-6 space-y-2">
              <p className="flex items-center">
                <IconCar className="mr-2" /> Pengiriman gratis untuk pesanan di
                atas $50
              </p>
              <p className="flex items-center">
                <IconReload className="mr-2" /> Kebijakan pengembalian 30 hari
              </p>
              <p className="flex items-center">
                <IconShield className="mr-2" />
                Garansi 2 tahun
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Produk Terkait</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedProduct.map((item, index) => (
              <div
                key={index}
                className=" border-gray-200 border shadow-xl  rounded-lg bg-white flex items-center gap-4"
              >
                <div className="w-32 h-32 rounded-lg overflow-hidden">
                  <img
                    src={item.img}
                    alt={`Gambar ${item.name}`}
                    className="object-cover object-top w-full h-full"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <div className="flex text-yellow-500 my-1">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>

                  <p className="text-gray-500 font-semibold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
