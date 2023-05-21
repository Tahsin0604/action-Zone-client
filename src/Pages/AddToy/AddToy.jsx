import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
const AddToy = () => {
  const [select, setSelect] = useState("Select One");
  const { user } = useContext(AuthContext);
  console.log(user);
  const handleInsert = (e) => {
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
    const newToy = {
      picture_url: photo,
      name: name,
      seller_name: userName,
      seller_email: userEmail,
      sub_category: category,
      price: price,
      rating: rating,
      available_quantity: quantity,
      description: description,
    };
    console.log(newToy);
    fetch("http://localhost:3000/toy", {
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
    <div className="custom-container py-16">
      <h1
        className="section-title mb-8"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        Add a new Toy !
      </h1>
      <form onSubmit={handleInsert} className="max-w-lg space-y-5 mx-auto">
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
            placeholder={select}
            required
            onChange={(e) => setSelect(e.target.value)}
          >
            <option>Action Figures</option>
            <option>Collectible Statues</option>
            <option>Transforming Figures</option>
            <option>Playsets</option>
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
