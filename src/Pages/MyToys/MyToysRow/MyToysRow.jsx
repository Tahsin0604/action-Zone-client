import React from "react";
import Swal from "sweetalert2";
import { FaPencilAlt, FaRegTrashAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const MyToysRow = ({ toy, updateToyList }) => {
  const { _id, name, sub_category, price, rating, available_quantity } = toy;
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/toy/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You will delete the product permanently.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Items has been deleted.", "success");
              updateToyList(id);
            }
          }
        });
      });
  };
  return (
    <tr>
      <td className="text-start font-spaceMono">{name}</td>
      <td className="text-start font-spaceMono">{sub_category}</td>
      <td className="text-start font-spaceMono">${price}</td>
      <td className="text-start font-spaceMono">
        <p className="flex items-center gap-2">
          <FaStar></FaStar>
          {rating}
        </p>
      </td>
      <td className="text-start font-spaceMono">{available_quantity}</td>
      <th>
        <div className="flex items-center gap-2">
          <Link
            to={`/update-toy/${_id}`}
            className="font-bruno text-base px-2 py-1 rounded-lg border border-solid border-sky-700 shadow-lg font-semibold tracking-wider text-slate-900 bg-white hover:-translate-y-1 transition-all duration-200 ease-in-out"
            title="Update Item"
          >
            <FaPencilAlt className="text-black "></FaPencilAlt>
          </Link>
          <button
            className="font-bruno text-base px-2 py-1 rounded-lg border border-solid border-sky-700 shadow-lg font-semibold tracking-wider text-slate-900 bg-white hover:-translate-y-1 transition-all duration-200 ease-in-out"
            title="Delete Item"
            onClick={() => handleDelete(_id)}
          >
            <FaRegTrashAlt className="text-black "></FaRegTrashAlt>
          </button>
        </div>
      </th>
    </tr>
  );
};

export default MyToysRow;
