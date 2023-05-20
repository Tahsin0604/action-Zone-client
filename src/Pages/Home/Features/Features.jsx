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
    <div className="custom-container py-16 bg-slate-50">
      <h1
        className="section-title "
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        Why Us
      </h1>
      <div
        className="flex flex-col  md:flex-row justify-center items-center gap-8 mt-14 mb-16"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        <div className="flex flex-col justify-center items-center drop-shadow-lg border rounded-lg  space-y-4 shadow-xl cursor-pointer transition-all hover:-translate-y-1 duration-200 ease-in-out w-56 h-44 bg-white">
          <div className="h-16 w-16 border rounded-full p-4 flex items-center justify-center bg-sky-400">
            <FaRegCreditCard className=" text-4xl text-white"></FaRegCreditCard>
          </div>

          <p className="font-bruno text-sky-800 text-lg font-bold">
            Secure Payment
          </p>
        </div>
        <div className="flex flex-col justify-center items-center drop-shadow-lg border rounded-lg  space-y-4 shadow-xl cursor-pointer transition-all hover:-translate-y-1 duration-200 ease-in-out w-56 h-44 bg-white">
          <div className="h-16 w-16 border rounded-full p-4 flex items-center justify-center bg-sky-400">
            <FaShippingFast className=" text-4xl text-white"></FaShippingFast>
          </div>

          <p className="font-bruno text-sky-800 text-lg font-bold">
            Fast Delivery
          </p>
        </div>
        <div className="flex flex-col justify-center items-center drop-shadow-lg border rounded-lg  space-y-4 shadow-xl cursor-pointer transition-all hover:-translate-y-1 duration-200 ease-in-out w-56 h-44 bg-white">
          <div className="h-16 w-16 border rounded-full p-4 flex items-center justify-center bg-sky-400">
            <FaHeadset className=" text-4xl text-white"></FaHeadset>
          </div>

          <p className="font-bruno text-sky-800 text-lg font-bold">
            Customer Service
          </p>
        </div>
        <div className="flex flex-col justify-center items-center drop-shadow-lg border rounded-lg  space-y-4 shadow-xl cursor-pointer transition-all hover:-translate-y-1 duration-200 ease-in-out w-56 h-44 bg-white">
          <div className="h-16 w-16 border rounded-full p-4 flex items-center justify-center bg-sky-400">
            <FaRegGem className=" text-4xl text-white"></FaRegGem>
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
