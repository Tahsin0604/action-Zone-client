import React from "react";
import { Link } from "react-router-dom";

const ToysRow = ({ toy }) => {
  const { _id, name, seller_name, sub_category, price } = toy;
  return (
    <tr>
      <td className="text-start font-spaceMono text-sm">{seller_name}</td>
      <td className="text-start font-spaceMono text-sm">{name}</td>
      <td className="text-start font-spaceMono text-sm">{sub_category}</td>
      <td className="text-start font-spaceMono text-sm">${price}</td>
      <th>
        <Link to={`/toy/${_id}`} className="font-spaceMono button-secondary">
          View Details
        </Link>
      </th>
    </tr>
  );
};

export default ToysRow;
