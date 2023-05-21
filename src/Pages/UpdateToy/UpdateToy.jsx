import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const UpdateToy = () => {
  const { user } = useContext(AuthContext);
  const toy = useLoaderData();
  const {
    _id,
    available_quantity,
    description,
    name,
    picture_url,
    price,
    rating,
    category,
    sub_category,
  } = toy;
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [subCategory, setsSubCategory] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/category/${selectedCategory}`)
      .then((res) => res.json())
      .then((data) => setsSubCategory(data.subcategories));
  }, [selectedCategory]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(sub_category);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const price = parseInt(form.price.value);
    const rating = parseFloat(form.rating.value);
    const quantity = parseInt(form.quantity.value);
    const description = form.description.value;
    const userName = user?.displayName;
    const userEmail = user.email;
    const updatedToy = {
      picture_url: photo,
      name: name,
      seller_name: userName,
      seller_email: userEmail,
      category: category,
      sub_category: subCategory,
      price: price,
      rating: rating,
      available_quantity: quantity,
      description: description,
    };
    fetch(`http://localhost:3000/toy/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Toy Details Updated",
          });
        }
      });
  };
  return (
    <div className="custom-container py-16">
      <h1
        className="section-title mb-8"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        Update Data !
      </h1>
      <form
        onSubmit={handleUpdate}
        className="max-w-lg space-y-6 mx-auto"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        {/* name */}
        <div className="flex flex-col space-y-2">
          <label>
            <span className=" font-spaceMono">Name</span>
          </label>
          <input
            type="text"
            defaultValue={name}
            name="name"
            className="w-full outline-0 rounded border border-slate-600 text-lg px-5 py-2 text-slate-500 shadow-md "
          />
        </div>

        {/* photo */}
        <div className="flex flex-col space-y-2">
          <label>
            <span className=" font-spaceMono">Photo URL</span>
          </label>
          <input
            type="text"
            defaultValue={picture_url}
            name="photo"
            className="w-full outline-0 rounded border border-slate-600 text-lg px-5 py-2 text-slate-500 shadow-md "
          />
        </div>

        {/* category */}
        <div className="flex flex-col space-y-2">
          <label>
            <span className=" font-spaceMono">Category</span>
          </label>
          <select
            className="w-full outline-0 rounded border border-slate-600 text-lg px-5 py-2 text-slate-500 shadow-md "
            name="category"
            defaultValue={selectedCategory}
            required
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option>Best Selling</option>
            <option>Fan Favourite</option>
            <option>Top Rated</option>
          </select>
        </div>
        {/* subcategory */}
        <div className="flex flex-col space-y-2">
          <label>
            <span className=" font-spaceMono">Sub-category</span>
          </label>
          <select
            className="w-full outline-0 rounded border border-slate-600 text-lg px-5 py-2 text-slate-500 shadow-md "
            name="subCategory"
            defaultValue={selectedSubCategory}
            required
            onChange={(e) => setSelectedSubCategory(e.target.value)}
          >
            {subCategory.map((item, i) => (
              <option key={i}>{item}</option>
            ))}
          </select>
        </div>

        {/* price */}
        <div className="flex flex-col space-y-2">
          <label>
            <span className=" font-spaceMono">Price</span>
          </label>
          <input
            type="text"
            defaultValue={price}
            name="price"
            className="w-full outline-0 rounded border border-slate-600 text-lg px-5 py-2 text-slate-500 shadow-md "
          />
        </div>

        {/* rating */}
        <div className="flex flex-col space-y-2">
          <label>
            <span className=" font-spaceMono">Rating</span>
          </label>
          <input
            type="text"
            defaultValue={rating}
            name="rating"
            className="w-full outline-0 rounded border border-slate-600 text-lg px-5 py-2 text-slate-500 shadow-md "
          />
        </div>

        {/* quantity */}
        <div className="flex flex-col space-y-2">
          <label>
            <span className=" font-spaceMono">Quantity</span>
          </label>
          <input
            type="text"
            defaultValue={available_quantity}
            name="quantity"
            className="w-full outline-0 rounded border border-slate-600 text-lg px-5 py-2 text-slate-500 shadow-md "
          />
        </div>

        {/* description */}
        <div className="flex flex-col space-y-2">
          <label>
            <span className=" font-spaceMono">Description</span>
          </label>
          <textarea
            type="text"
            defaultValue={description}
            name="description"
            cols="50"
            className="w-full outline-0 rounded border border-slate-600 text-lg px-5 py-2 text-slate-500 shadow-md "
          ></textarea>
        </div>
        <button className="button-secondary w-full">Update</button>
      </form>
    </div>
  );
};

export default UpdateToy;
