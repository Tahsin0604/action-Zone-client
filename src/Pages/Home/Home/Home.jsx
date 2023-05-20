import Banner from "../Banner/Banner";

import ImageGallery from "../ImageGallery/ImageGallery";
import Products from "../Products/Products";
import About from "../About/About";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div>
        <Banner></Banner>
      </div>
      <About></About>
      <div>
        <ImageGallery></ImageGallery>
      </div>
      <div>
        <Products></Products>
      </div>
    </div>
  );
};

export default Home;
