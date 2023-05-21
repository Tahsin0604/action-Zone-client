import React, { useEffect } from "react";
import errorImg from "../../assets/img/error/error.jpg";
import { Link, useRouteError } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Error = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  const error = useRouteError();
  return (
    <div className="flex custom-container flex-col justify-center items-center gap-16 md:gap-6 h-screen">
      <div className="w-full md:w-1/2">
        <img
          src={errorImg}
          alt=""
          className="h-60 md:h-fit w-full rounded-lg"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-delay="200"
        />
      </div>
      <div
        className="flex flex-col justify-center items-center w-full md:w-1/2"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        <div className="w-full">
          <div className="max-w-lg text-center space-y-5 mx-auto">
            <h1 className="font-permanentMarker text-5xl font-bold text-red-600">
              Oops!
            </h1>
            <p className="font-permanentMarker text-3xl font-bold text-red-600">
              An Error Occurs
            </p>
            <p className="font-permanentMarker text-3xl font-bold text-red-600">
              <i>{error.statusText || error.message}</i>
            </p>
            <div>
              <Link to="/" className="button-secondary">
                Go Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
