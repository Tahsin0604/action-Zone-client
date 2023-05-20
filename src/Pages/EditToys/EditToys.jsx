import React from "react";

const EditToys = () => {
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const country = form.country.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const updatedChocolate = {
      name,
      country,
      photo,
      category,
    };
    console.log(updatedChocolate);
    fetch(`http://localhost:3000/chocolate/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedChocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Chocolate Details Updated",
          });
        }
      });
  };
  return (
    <div>
      {/* <Link
        className="hover:border-b border-solid border-slate-900  flex items-center gap-2 px-1 w-40"
        to="/"
      >
        <FaArrowLeft></FaArrowLeft>{" "}
        <span className="text-lg font-semibold">All Chocolates</span>
      </Link> */}

      <hr className="w-full px-1 my-4 h-px" />
      <form
        onSubmit={handleUpdate}
        className="bg-slate-200 rounded-lg px-2 lg:px-28 py-20 mt-10 "
      >
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold mb-2">New Chocolates</h1>
          <p className="text-lg">
            <small>Use the below form to create a new product</small>
          </p>
        </div>
        {/* Name field */}
        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder=""
            className="input input-bordered"
          />
        </div>

        {/* Country Field */}
        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Country</span>
          </label>
          <input
            type="text"
            name="country"
            placeholder=""
            className="input input-bordered"
          />
        </div>

        {/* Photo field */}
        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder=""
            className="input input-bordered"
          />
        </div>

        {/* Category */}
        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select className="select select-bordered" name="category">
            <option>Action Figures</option>
            <option>Collectible Statues</option>
            <option>Transforming Figures</option>
            <option>Playsets</option>
          </select>
        </div>
        <button className="btn btn-block bg-amber-700">Update</button>
      </form>
    </div>
  );
};

export default EditToys;
