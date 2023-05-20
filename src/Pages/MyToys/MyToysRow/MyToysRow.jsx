import React from "react";

const MyToysRow = () => {
  return (
    <tr>
      <td className="text-start font-spaceMono">{seller_name}</td>
      <td className="text-start font-spaceMono">{name}</td>
      <td className="text-start font-spaceMono">{sub_category}</td>
      <td className="text-start font-spaceMono">${price}</td>
      <th>
        <Link
          to={`/details/${_id}`}
          className="font-spaceMono button-secondary"
        >
          View Details
        </Link>
      </th>
    </tr>
  );
};

export default MyToysRow;
