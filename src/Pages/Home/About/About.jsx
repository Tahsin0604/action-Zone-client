import "../About/About.css";
import img from "../../../assets/img/about/about.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const About = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div id="about" data-aos="fade-up" data-aos-duration="1000">
      <div className="custom-container  flex flex-col lg:flex-row  justify-center items-center gap-8">
        <div className="w-full lg:w-1/2 ">
          <img
            src={img}
            alt=""
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="200"
            className="w-full h-96 shadow-lg border-2 border-solid shadow-emerald-100  rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1
            className="text-4xl font-bold  font-bruno drop-shadow mt-6"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            About us
          </h1>
          <p
            className="font-bold  font-spaceMono my-10"
            data-aos="fade-left"
            data-aos-duration="1700"
            data-aos-delay="200"
          >
            We provide fan favorite comics character action toys, their
            accessories and different gadget replica. We deliver our products
            with delight to our customers. So buy now your favorite action toys
            from ActionZone.
          </p>
          <div
            className="flex gap-6"
            data-aos="fade-up"
            data-aos-duration="1800"
            data-aos-delay="200"
          >
            <button className="button-primary">Order Now</button>

            <Link to="/" className="button-secondary flex items-center gap-3">
              View Products <FaAngleRight></FaAngleRight>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
