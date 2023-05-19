import Banner from "./Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ImageGallery from "./ImageGallery";
import Products from "./Products";

const Home = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <Banner></Banner>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
        <ImageGallery></ImageGallery>
      </div>
      <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
        <Products></Products>
      </div>
    </div>
  );
};

export default Home;
