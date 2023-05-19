import { Link } from "react-router-dom";
import ReactStarRatings from "react-star-ratings";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ShowToy = ({ toy }) => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  const { picture_url, name, price, rating } = toy;
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      data-aos-delay="200"
      className="flex flex-col rounded-lg  pb-3 bg-white shadow-lg shadow-slate-200 group hover:-translate-y-1"
    >
      <img
        src={picture_url}
        alt=""
        className="h-72 w-full rounded-t-lg border-b border-solid"
      />

      <div className="flex flex-col px-4 space-y-3 mt-2">
        <h2 className="font-permanentMarker tracking-widest text-lg text-slate-800 font-semibold transition-all duration-200 ease-in-out">
          {name}
        </h2>
        <p className="font-spaceMono tracking-widest text-slate-700 font-semibold">
          ${price}
        </p>
      </div>
      <div className="mt-auto flex justify-between items-center px-4 pt-1">
        <ReactStarRatings
          rating={rating}
          starRatedColor="gold"
          numberOfStars={5}
          starDimension="24px"
          starSpacing="1px"
          starEmptyColor="lightgray"
          name="rating"
        />
        <Link
          to="/"
          className="font-spaceMono px-2 py-1 bg-blue-300 hover:bg-blue-400 text-white rounded-lg transition-all duration-200 ease-in-out"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default ShowToy;
