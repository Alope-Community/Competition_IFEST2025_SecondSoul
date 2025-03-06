import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { IconSearch } from "@tabler/icons-react";

const SwapSell: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="w-full min-h-screen mt-20 bg-gray-50 sm:px-10 lg:px-20 px-5">
                {/* Container */}
                <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">

                    {/* Page Heading */}
                    <h1 className=" sm:text-2xl text-xl lg:text-3xl font-bold text-gray-800 text-center mb-10">
                        Bagaimana Cara Menukar Atau Menjual Baju Bekas.
                    </h1>

                    {/* Steps Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {/* Step 1 */}
                        <div className="bg-white shadow rounded p-6 flex flex-col items-center text-center">
                            <div className="mb-4 text-indigo-600 text-4xl">&#128230;</div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                1. Siapkan Produk Anda
                            </h2>
                            <p className="text-gray-600">
                                Bersihkan dan kemas produk Anda dengan baik. Ambil foto yang jelas dan siapkan detail produk.
                            </p>
                        </div>

                        {/* Langkah 2 */}
                        <div className="bg-white shadow rounded p-6 flex flex-col items-center text-center">
                            <div className="mb-4 text-indigo-600 text-4xl">&#128205;</div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                2. Temukan Agen Terdekat
                            </h2>
                            <p className="text-gray-600">
                                Cari agen resmi kami menggunakan peta di bawah ini dan kunjungi lokasi mereka.
                            </p>
                        </div>

                        {/* Langkah 3 */}
                        <div className="bg-white shadow rounded p-6 flex flex-col items-center text-center">
                            <div className="mb-4 text-indigo-600 text-4xl">&#128179;</div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                3. Selesaikan Transaksi
                            </h2>
                            <p className="text-gray-600">
                                Temui agen kami untuk mengevaluasi produk Anda dan menyelesaikan pertukaran atau penjualan.
                            </p>
                        </div>

                    </div>

                    {/* Find Our Agents Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center ">
                            Cari Agent Terdekat
                        </h2>

                        <form className="mb-8 flex justify-center">
                            <input
                                type="text"
                                placeholder="Masukkan kota anda"
                                className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
                            />
                            <button
                                type="button"
                                className="bg-gray-600 text-white rounded-r px-4 py-2 focus:outline-none"
                            >
                                <IconSearch />
                            </button>
                        </form>


                        {/* Wrapper for Map and Agent List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Map Placeholder */}
                            <div className="bg-gray-200 h-64 md:h-full sm:h-64 flex items-center justify-center rounded">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.291353674568!2d108.4984679743097!3d-6.974911268297162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f16a074ab8a2f%3A0x663810741bca29cc!2sUniversitas%20Kuningan!5e0!3m2!1sid!2sid!4v1741265966024!5m2!1sid!2sid" width="100%" height="100%" loading="lazy"></iframe>
                            </div>

                            {/* Agent List */}
                            <div className="space-y-4">
                                <div className="bg-white shadow rounded p-4">
                                    <h3 className="font-semibold text-gray-800">Second Soul Bandung</h3>
                                    <p className="text-gray-600">Jl. Asia Afrika No. 1, Bandung</p>
                                    <p className="text-gray-600">022-1234567</p>
                                </div>

                                <div className="bg-white shadow rounded p-4">
                                    <h3 className="font-semibold text-gray-800">Second Soul Bekasi</h3>
                                    <p className="text-gray-600">Jl. Raya Bekasi No. 2, Bekasi</p>
                                    <p className="text-gray-600">021-7654321</p>
                                </div>

                                <div className="bg-white shadow rounded p-4">
                                    <h3 className="font-semibold text-gray-800">Second Soul Depok</h3>
                                    <p className="text-gray-600">Jl. Margonda Raya No. 3, Depok</p>
                                    <p className="text-gray-600">021-3456789</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SwapSell;
