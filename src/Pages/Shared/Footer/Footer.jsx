import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/ActionZone.png";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <footer
      className="custom-container"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="200"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between py-16 border-b gap-12">
        <div className="flex flex-col space-y-6">
          <Link to="/" className="cursor-pointer flex gap-3 items-end">
            <img src={logo} alt="" className="h-16" />
            <h1 className="text-2xl font-bold  text-slate-500 font-bruno tracking-widest">
              <span className="text-sky-600 text-3xl">A</span>
              ction<span className="text-sky-600 text-3xl">Z</span>one
            </h1>
          </Link>
          <p className="font-spaceMono text-sm">
            Get the most recent collection here.
          </p>
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 border rounded-full p-2 flex items-center justify-center bg-slate-50 shadow-lg transition-all duration-100 hover:-translate-y-1 cursor-pointer">
              <FaFacebookF className=" text-lg"></FaFacebookF>
            </div>
            <div className="h-10 w-10 border rounded-full p-2 flex items-center justify-center bg-slate-50 shadow-lg transition-all duration-100 hover:-translate-y-1 cursor-pointer">
              <FaTwitter className=" text-lg"></FaTwitter>
            </div>
            <div className="h-10 w-10 border rounded-full p-2 flex items-center justify-center bg-slate-50 shadow-lg transition-all duration-100 hover:-translate-y-1 cursor-pointer">
              <FaInstagramSquare className=" text-lg"></FaInstagramSquare>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-4">
          <div className="flex flex-col space-y-4">
            <h1 className="font-spaceMono font-extrabold text-xl ">Company</h1>
            <ul className="space-y-2 font-medium">
              <li>
                <a className="cursor-pointer hover:text-sky-600">About Us</a>
              </li>
              <li>
                <a className="cursor-pointer hover:text-sky-600">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a className="cursor-pointer hover:text-sky-600">Privacy</a>
              </li>
              <li>
                <a className="cursor-pointer hover:text-sky-600">Sitemap</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="font-spaceMono font-extrabold text-xl ">
              Customer Services
            </h1>
            <ul className="space-y-2 font-medium">
              <li>
                <a className="cursor-pointer hover:text-sky-600">
                  Support Center
                </a>
              </li>
              <li>
                <a className="cursor-pointer hover:text-sky-600">
                  Returns & Exchange
                </a>
              </li>
              <li>
                <a className="cursor-pointer hover:text-sky-600">
                  Shipping & Delivery
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="font-spaceMono font-extrabold text-xl ">
              Quick Contact
            </h1>
            <ul className="space-y-2 ">
              <li>
                <p className="font-bold">Phone:</p>
                <p className="font-medium">01500317777</p>
              </li>
              <li>
                <p className="font-bold">Email:</p>
                <p className="font-medium">actionzone@gmail.com</p>
              </li>
              <li>
                <p className="font-bold">Address:</p>
                <p className="font-medium">Dhaka, Bangladesh</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center font-mono font-bold py-4">
        Copyright 2023 &copy; Owned by ActionZone.
      </p>
    </footer>
  );
};

export default Footer;
