import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Modal from "react-modal";
//image
import img1 from "../../../assets/img/gallery/10-blackpanther.jpg";
import img2 from "../../../assets/img/gallery/13-Nightwing.jpg";
import img3 from "../../../assets/img/gallery/17-cat-woman.jpg";
import img4 from "../../../assets/img/gallery/19-luthar.jpg";
import img5 from "../../../assets/img/gallery/2-batman.jpg";
import img6 from "../../../assets/img/gallery/4-wonderwoman.jpg";
import img7 from "../../../assets/img/gallery/6-capptainamerica.jpg";
import img8 from "../../../assets/img/gallery/9-deadpool.jpg";

import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
  FaTimes,
} from "react-icons/fa";

const ImageGallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  const openModal = (imageUrl, index) => {
    setSelectedImageUrl(imageUrl);
    setCurrentIndex(index);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setSelectedImageUrl("");
    setModalIsOpen(false);
  };

  const goToPrevious = () => {
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImageUrl(images[previousIndex]);
    setCurrentIndex(previousIndex);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImageUrl(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  return (
    <div
      className="custom-container py-10 bg-sky-300 "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h1
        className="section-title"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        Toys Gallery
      </h1>
      <p
        className="section-paragraph"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        Most popular toys right now in our shop
      </p>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
        <Masonry gutter="20px">
          {images.map((image, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="overflow-hidden cursor-pointer bg-white border border-blue-200 shadow-xl shadow-slate-200  rounded-lg group "
            >
              <img
                src={image}
                className="w-80 mx-auto  group-hover:scale-105 transition duration-300 ease-in-out"
                onClick={() => openModal(image, i)}
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className=" w-full h-screen bg-black bg-opacity-95 flex flex-col justify-center items-center relative z-10"
      >
        <div className="absolute top-3 right-3 z-10">
          <button
            onClick={closeModal}
            className="text-xl font-bruno text-white"
          >
            <FaTimes></FaTimes>
          </button>
        </div>
        <div className="absolute inset-0 flex justify-between items-center px-8 text-4xl font-permanentMarker text-slate-200 ">
          <button onClick={goToNext}>
            <FaRegArrowAltCircleLeft></FaRegArrowAltCircleLeft>
          </button>

          <button onClick={goToPrevious}>
            <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight>
          </button>
        </div>
        <img src={selectedImageUrl} alt="Full-size Image" className="h-[85%]" />
      </Modal>
    </div>
  );
};

export default ImageGallery;
