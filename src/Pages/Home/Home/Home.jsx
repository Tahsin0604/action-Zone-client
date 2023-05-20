import Banner from "../Banner/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import Products from "../Products/Products";
import About from "../About/About";
import Features from "../Features/Features";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div className="overflow-hidden">
      <div data-aos="fade-up" data-aos-duration="1000">
        <Banner></Banner>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <About></About>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <ImageGallery></ImageGallery>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Features></Features>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Products></Products>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
