import { useEffect, useState } from "react";
import ShowToy from "../ShowToy/ShowToy";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const Products = () => {
  const categories = ["Best Selling", "Fan Favourite", "Top Rated"];
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  // const [category, setCategory] = useState("Best Selling");
  const [subCategory, setsSubCategory] = useState([]);
  const [activeSubCategory, setActiveSubCategory] = useState("All");
  const [toys, setToys] = useState([]);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-eta-weld.vercel.app/category/${activeCategory}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setsSubCategory(data.subcategories);
      });
  }, [activeCategory]);

  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-eta-weld.vercel.app/toys/${activeCategory}?subCategory=${activeSubCategory}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [activeCategory, activeSubCategory]);
  const handleCategory = (item) => {
    setActiveSubCategory("All");
    setActiveCategory(item);
  };

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
            className={`font-bruno text-base px-8 py-2 rounded-lg border border-solid border-sky-700 shadow-lg font-semibold tracking-wider text-slate-900  hover:-translate-y-1 transition-all duration-200 ease-in-out ${
              activeCategory === item ? "bg-slate-200" : "bg-white"
            }`}
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
            className={`sub-category-btn ${
              activeSubCategory === item
                ? "active-subcategory-btn"
                : "deactive-subcategory-btn"
            }`}
            onClick={() => setActiveSubCategory(item)}
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
