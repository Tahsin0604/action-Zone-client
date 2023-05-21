import { useEffect, useState } from "react";
import ShowToy from "../ShowToy/ShowToy";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const Products = () => {
  const [category, setCategory] = useState("Best Selling");
  const [subCategory, setsSubCategory] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("all");
  const [toys, setToys] = useState([]);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/${category}`)
      .then((res) => res.json())
      .then((data) => setsSubCategory(data.subcategories));
  }, [category]);

  useEffect(() => {
    fetch(
      `http://localhost:3000/toys/${category}?subCategory=${selectedSubCategory}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [category, selectedSubCategory]);
  const handleCategory = (item) => {
    setSelectedSubCategory("all");
    setCategory(item);
  };
  const categories = ["Best Selling", "Fan Favourite", "Top Rated"];
  return (
    <div className="custom-container py-14 ">
      <h1
        className="section-title"
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-delay="300"
      >
        Our Products
      </h1>
      <p
        className="section-paragraph"
        data-aos="fade-left"
        data-aos-duration="2100"
        data-aos-delay="300"
      >
        Various beloved action hero figures and gadgets are avialabe
      </p>
      {/* Categories */}
      <div
        className="flex flex-wrap  justify-center gap-5 pb-6 border-b border-solid "
        data-aos="fade-up"
        data-aos-duration="2200"
        data-aos-delay="300"
      >
        {categories.map((item, i) => (
          <button
            key={i}
            className="button-secondary"
            onClick={() => handleCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div
        className="flex flex-wrap  justify-center gap-5 mt-6"
        data-aos="fade-up"
        data-aos-duration="2200"
        data-aos-delay="300"
      >
        {subCategory.map((item, i) => (
          <button
            key={i}
            className="button-primary"
            onClick={() => setSelectedSubCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-14 gap-4">
        {toys.map((toy) => (
          <ShowToy key={toy._id} toy={toy}></ShowToy>
        ))}
      </div>
      <div
        className="flex justify-end mt-14 mb-4"
        data-aos="fade-up"
        data-aos-duration="2200"
        data-aos-delay="300"
      >
        <Link
          to="/all-toys"
          className="button-secondary flex items-center gap-3"
        >
          View More <FaAngleRight></FaAngleRight>
        </Link>
      </div>
    </div>
  );
};

export default Products;
