import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import register from "../../../assets/img/login/login.jpg";
import React from "react";
import { FaGoogle, FaTwitter } from "react-icons/fa";

const Register = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div className="custom-container py-16">
      <h1
        className="section-title  mb-8"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        Register Now!
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-6">
        <div
          className="w-full md:w-1/2"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="200"
        >
          <img
            src={register}
            alt=""
            className="h-96 md:h-fit w-full rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-1/2">
          <div
            className="w-full"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            <form className="max-w-lg space-y-5 mx-auto">
              {/* name */}
              <div className="flex flex-col space-y-2">
                <label>
                  <span className=" font-spaceMono">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  className="w-full outline-0 rounded border border-slate-600 text-lg px-5 py-2 text-slate-500 shadow-md font-spaceMono"
                />
              </div>

              {/* email */}
              <div className="flex flex-col space-y-2">
                <label>
                  <span className=" font-spaceMono">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  className="w-full outline-0 rounded border border-slate-600 text-lg px-5 py-2 text-slate-500 shadow-md font-spaceMono"
                />
              </div>

              {/* photo */}
              <div className="flex flex-col space-y-2">
                <label>
                  <span className=" font-spaceMono">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  required
                  className="w-full outline-0 rounded border border-slate-600 text-lg px-5 py-2 text-slate-500 shadow-md font-spaceMono"
                />
              </div>

              {/* password */}
              <div className="flex flex-col space-y-2">
                <label>
                  <span className=" font-spaceMono">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  className="w-full outline-0 rounded border border-slate-600 text-lg px-5 py-2 text-slate-500 shadow-md font-spaceMono"
                />
              </div>

              {/* confirm */}
              <div className="flex flex-col space-y-2">
                <label>
                  <span className=" font-spaceMono">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirm"
                  required
                  className="w-full outline-0 rounded border border-slate-600 text-lg px-5 py-2 text-slate-500 shadow-md font-spaceMono"
                />
                <label>
                  <p className="font-spaceMono text-slate-600">
                    <small>
                      Already have an account?
                      <Link
                        to="/login"
                        className="ml-3 font-bold hover:text-sky-500 hover:underline underline-offset-4 duration-200 transition-colors ease-in-out"
                      >
                        Login
                      </Link>
                    </small>
                  </p>
                </label>
              </div>

              <div className="w-full">
                <button className="button-secondary w-full">Register</button>
              </div>
            </form>
          </div>
          <div
            className="divider font-spaceMono"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            OR
          </div>
          <div
            className="w-full flex justify-center items-center bg-sky-300 py-8 rounded-lg space-x-4"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            <button className="p-4  rounded-full border border-solid shadow-xl shadow-slate-300 font-semibold tracking-wider text-slate-900 bg-white hover:-translate-y-1 transition-all duration-200 ease-in-out">
              <FaGoogle className="text-xl"></FaGoogle>
            </button>
            <button className="p-4  rounded-full border border-solid shadow-xl shadow-slate-300 font-semibold tracking-wider text-slate-900 bg-white hover:-translate-y-1 transition-all duration-200 ease-in-out">
              <FaTwitter className="text-xl"></FaTwitter>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
