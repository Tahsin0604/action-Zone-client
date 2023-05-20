import Banner from "../Banner/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import Products from "../Products/Products";
import About from "../About/About";
import Features from "../Features/Features";

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
      <About></About>
      <ImageGallery></ImageGallery>
      <Features></Features>
      <Products></Products>
    </div>
  );
};

export default Home;
