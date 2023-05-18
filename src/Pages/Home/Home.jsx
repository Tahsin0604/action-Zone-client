import Banner from "./Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Home;
