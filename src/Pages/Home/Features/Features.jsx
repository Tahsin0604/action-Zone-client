import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHeadset,
  FaRegCreditCard,
  FaRegGem,
  FaShippingFast,
} from "react-icons/fa";

const Features = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div
      className="custom-container py-16"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h1
        className="section-title "
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        Why Us
      </h1>
      <div
        className="flex flex-col  lg:flex-row justify-center items-center gap-8 mt-14 mb-16"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        <div className="flex flex-col justify-center items-center drop-shadow-lg border rounded-lg  space-y-4 shadow-xl shadow-sky-100 cursor-pointer transition-all hover:-translate-y-1 duration-200 ease-in-out w-64 h-48">
          <div className="h-24 w-24 border rounded-full p-4 flex items-center justify-center bg-sky-400">
            <FaRegCreditCard className=" text-7xl text-white"></FaRegCreditCard>
          </div>

          <p className="font-bruno text-sky-800 text-lg font-bold">
            Secure Payment
          </p>
        </div>
        <div className="flex flex-col justify-center items-center drop-shadow-lg border rounded-lg  space-y-4 shadow-xl shadow-sky-100 cursor-pointer transition-all hover:-translate-y-1 duration-200 ease-in-out w-64 h-48">
          <div className="h-24 w-24 border rounded-full p-4 flex items-center justify-center bg-sky-400">
            <FaShippingFast className=" text-7xl text-white"></FaShippingFast>
          </div>

          <p className="font-bruno text-sky-800 text-lg font-bold">
            Fast Delivery
          </p>
        </div>
        <div className="flex flex-col justify-center items-center drop-shadow-lg border rounded-lg  space-y-4 shadow-xl shadow-sky-100 cursor-pointer transition-all hover:-translate-y-1 duration-200 ease-in-out w-64 h-48">
          <div className="h-24 w-24 border rounded-full p-4 flex items-center justify-center bg-sky-400">
            <FaHeadset className=" text-7xl text-white"></FaHeadset>
          </div>

          <p className="font-bruno text-sky-800 text-lg font-bold">
            Customer Service
          </p>
        </div>
        <div className="flex flex-col justify-center items-center drop-shadow-lg border rounded-lg  space-y-4 shadow-xl shadow-sky-100 cursor-pointer transition-all hover:-translate-y-1 duration-200 ease-in-out w-64 h-48">
          <div className="h-24 w-24 border rounded-full p-4 flex items-center justify-center bg-sky-400">
            <FaRegGem className=" text-7xl text-white"></FaRegGem>
          </div>

          <p className="font-bruno text-sky-800 text-lg font-bold">
            Product Quality
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
