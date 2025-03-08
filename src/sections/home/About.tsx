import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="">
        <div className="w-full flex flex-col px-4 py-5 sm:py-16 sm:flex-row lg:items-center sm:px-20 gap-10 bg-black">
          <div className="lg:w-1/2 md:w-full md:px-0 w-full flex justify-center">
            <img
              src="img/satu.jpg"
              alt=""
              className="w-full sm:w-[450px] sm:ml-11 h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2 w-full  px-4 lg:px-0 mb-10 lg:mt-0 text-left md:mt-15">
            <h1 className="lg:text-4xl md:text-2xl md:mt-10 text-xl sm:mb-6 mb-3 text-white">
              Fashion modern yang terlahir kembali dari pakaian lama.
            </h1>
            <NavLink
              to={""}
              className="relative pb-2 text-gray-100 text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-white after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
            >
              Tukar Sekarang
            </NavLink>
          </div>
        </div>

        <div className="w-full flex flex-col px-4 py-5 sm:py-16 sm:flex-row-reverse lg:items-center sm:px-20 gap-10 bg-black">
          <div className="lg:w-1/2 md:w-full md:px-0 w-full flex justify-center">
            <img
              src="img/hero2.jpg"
              alt=""
              className="w-full sm:w-[450px] sm:ml-11 h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2 w-full  px-4 lg:px-0 mb-10 lg:mt-0 text-left md:mt-15">
            <h1 className="lg:text-4xl lg:ml-8 md:text-2xl md:mt-10 text-xl sm:mb-6 mb-3 text-white">
              Tukar, Daur Ulang, Pakai Lagi!
            </h1>
            <NavLink
              to={""}
              className="relative pb-2 lg:ml-8 text-gray-100 text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-white after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
            >
              Tukar Sekarang
            </NavLink>
          </div>
        </div>

        <div className="w-full flex flex-col px-4 py-5 sm:py-16 sm:flex-row lg:items-center sm:px-20 gap-10 bg-black">
          <div className="lg:w-1/2 md:w-full md:px-0 w-full flex justify-center">
            <img
              src="img/hero3.jpg"
              alt=""
              className="w-full sm:w-[450px] sm:ml-11 h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2 w-full  px-4 lg:px-0 mb-10 lg:mt-0 text-left md:mt-15">
            <h1 className="lg:text-4xl md:text-2xl text-xl md:mt-10 sm:mb-6 mb-3 text-white">
              Tukar, Daur Ulang, Pakai Lagi!
            </h1>
            <NavLink
              to={""}
              className="relative pb-2 text-gray-100 text-lg after:content-[''] after:bottom-0 after:h-[2px] after:bg-white after:absolute after:rounded-full hover:after:w-full after:transition-all after:duration-500 after:left-0"
            >
              Tukar Sekarang
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
