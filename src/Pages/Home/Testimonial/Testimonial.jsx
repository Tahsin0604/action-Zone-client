import ReactStarRatings from "react-star-ratings";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../Testimonial/Testimonial.css";
import testimonial1 from "../../../assets/img/testimonial/testimonial (1).jpg";
import testimonial2 from "../../../assets/img/testimonial/testimonial (2).jpg";
import testimonial3 from "../../../assets/img/testimonial/testimonial (3).jpg";
const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div
      id="testimonial"
      className="flex flex-col md:flex-row justify-center items-center py-10 custom-container gap-7"
    >
      <div
        className="h-72 w-80 flex flex-col justify-center pl-6  border rounded-lg shadow-lg bg-white text-slate-900 "
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        <div className="space-y-8">
          <ReactStarRatings
            rating={4.5}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="1px"
            starEmptyColor="lightgray"
            name="rating"
          />
          <p className="w-64 font-spaceMono ">
            I am very pleased with goods that arrived exactly as described in
            the order.
          </p>
          <div className="flex items-center gap-4">
            <img
              src={testimonial1}
              alt="testimonial1"
              className="h-12 w-12 rounded-full border border-slate-600"
            />
            <div className="Flex flex-col">
              <p className="leading-none font-spaceMono font-semibold text-sm">
                Nicole Heart
              </p>
              <p className="font-spaceMono text-xs">
                <small>California, LA</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-72 w-80 flex flex-col justify-center pl-6  border rounded-lg shadow-lg bg-white text-slate-900 "
        data-aos="fade-up"
        data-aos-duration="1600"
        data-aos-delay="250"
      >
        <div className="space-y-8">
          <ReactStarRatings
            rating={4.5}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="1px"
            starEmptyColor="lightgray"
            name="rating"
          />
          <p className="w-64 font-spaceMono ">
            I am very pleased with goods that arrived exactly as described in
            the order.
          </p>
          <div className="flex items-center gap-4">
            <img
              src={testimonial2}
              alt="testimonial1"
              className="h-12 w-12 rounded-full border border-slate-600"
            />
            <div className="Flex flex-col">
              <p className="leading-none font-spaceMono font-semibold text-sm">
                Jack Perry
              </p>
              <p className="font-spaceMono text-xs">
                <small>Ottawa, Canada</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-72 w-80 flex flex-col justify-center pl-6  border rounded-lg shadow-lg bg-white text-slate-900 "
        data-aos="fade-up"
        data-aos-duration="1700"
        data-aos-delay="300"
      >
        <div className="space-y-8">
          <ReactStarRatings
            rating={4.5}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="1px"
            starEmptyColor="lightgray"
            name="rating"
          />
          <p className="w-64 font-spaceMono ">
            I am very pleased with goods that arrived exactly as described in
            the order.
          </p>
          <div className="flex items-center gap-4">
            <img
              src={testimonial3}
              alt="testimonial1"
              className="h-12 w-12 rounded-full border border-slate-600"
            />
            <div className="Flex flex-col">
              <p className="leading-none font-spaceMono font-semibold text-sm">
                Samantha Taylor
              </p>
              <p className="font-spaceMono text-xs">
                <small>New York City, USA</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
