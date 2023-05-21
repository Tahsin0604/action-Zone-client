import { useEffect, useState } from "react";
import ShowToy from "../ShowToy/ShowToy";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const Products = () => {
  const [category, setCategory] = useState("All");
  const [toys, setToys] = useState([]);
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:3000/toys/${category}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [category]);
  const categories = [
    "All",
    "Action Figures",
    "Collectible Statues",
    "Transforming Figures",
    "Playsets",
  ];
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
      <div
        className="flex flex-wrap  justify-center gap-5"
        data-aos="fade-up"
        data-aos-duration="2200"
        data-aos-delay="300"
      >
        {categories.map((item, i) => (
          <button
            key={i}
            className="button-secondary"
            onClick={() => setCategory(item)}
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
