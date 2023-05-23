import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useWebTitle } from "../../hooks/useWebTitle";
const AddToy = () => {
  useWebTitle("Add new toy");
  const [selectedCategory, setSelectedCategory] = useState("Best Selling");
  const [subCategory, setsSubCategory] = useState([]);
  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-eta-weld.vercel.app/category/${selectedCategory}`
    )
      .then((res) => res.json())
      .then((data) => {
        const slicedCategories = data.subcategories.slice(1);
        setsSubCategory(slicedCategories);
      });
  }, [selectedCategory]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    subCategory[0]
  );

  const { user } = useContext(AuthContext);
  const handleInsert = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const subCategory = form.subCategory.value;
    const price = parseInt(form.price.value);
    const rating = parseFloat(form.rating.value);
    const quantity = parseInt(form.quantity.value);
    const description = form.description.value;
    const userName = user?.displayName;
    const userEmail = user.email;
    const newToy = {
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
    console.log(newToy);
    fetch("https://toy-marketplace-server-eta-weld.vercel.app/toy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "New Toy Added",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="custom-container py-16 overflow-x-hidden">
      <h1
        className="section-title mb-8"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        Add a new Toy !
      </h1>
      <form
        onSubmit={handleInsert}
        className="max-w-lg space-y-5 mx-auto"
        data-aos="fade-right"
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
            placeholder="Name"
            name="name"
            required
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
            placeholder="Photo URL"
            name="photo"
            required
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
            placeholder={selectedCategory}
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
            placeholder={selectedSubCategory}
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
            placeholder="$"
            name="price"
            required
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
            placeholder="*"
            name="rating"
            required
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
            placeholder="Quantity"
            name="quantity"
            required
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
            placeholder="Description"
            name="description"
            cols="50"
            className="w-full outline-0 rounded border border-slate-600 text-lg px-5 py-2 text-slate-500 shadow-md "
          ></textarea>
        </div>
        <button className="button-secondary w-full">Add New</button>
      </form>
    </div>
  );
};

export default AddToy;
