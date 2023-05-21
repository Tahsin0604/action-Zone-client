import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  const {
    available_quantity,
    description,
    name,
    picture_url,
    price,
    rating,
    seller_email,
    seller_name,
    category,
    sub_category,
    _id,
  } = toy;
  return (
    <div className="custom-container">
      <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-6">
        <div
          className="w-full md:w-1/2"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="200"
        >
          <img
            src={picture_url}
            alt=""
            className="h-96 md:h-fit w-full rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-center  w-full md:w-1/2">
          <div
            className="w-full"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            <div className="max-w-xl space-y-5 mx-auto">
              <div className="flex space-x-5 ">
                <h1 className="font-bruno text-lg font-bold">Name:</h1>
                <h1 className="font-permanentMarker text-xl font-semibold tracking-wider">
                  {name}
                </h1>
              </div>
              <div className="flex space-x-5 ">
                <h1 className="font-bruno text-lg font-bold">Seller Name:</h1>
                <h1 className="text-xl font-semibold">{seller_name}</h1>
              </div>
              <div className="flex space-x-5 ">
                <h1 className="font-bruno text-lg font-bold">Seller Email:</h1>
                <h1 className="text-xl font-semibold">{seller_email}</h1>
              </div>
              <div className="flex space-x-5 ">
                <h1 className="font-bruno text-lg font-bold">Category:</h1>
                <h1 className="text-xl font-semibold">{category}</h1>
              </div>
              <div className="flex space-x-5 ">
                <h1 className="font-bruno text-lg font-bold">Sub-category:</h1>
                <h1 className="text-xl font-semibold">{sub_category}</h1>
              </div>
              <div className="flex space-x-5 ">
                <h1 className="font-bruno text-lg font-bold">Price:</h1>
                <h1 className="text-xl font-semibold">{price}</h1>
              </div>
              <div className="flex space-x-5 ">
                <h1 className="font-bruno text-lg font-bold">Rating:</h1>
                <h1 className="text-xl font-semibold">{rating}</h1>
              </div>
              <div className="flex space-x-5 ">
                <h1 className="font-bruno text-lg font-bold">
                  Available Quantity:
                </h1>
                <h1 className="text-xl font-semibold">{available_quantity}</h1>
              </div>
              <div className="flex space-x-5">
                <h1 className="font-bruno text-lg font-bold">Description:</h1>
                <p className="text-xl font-semibold">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
