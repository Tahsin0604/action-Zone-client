import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  // const totalPages = Math.ceil(totalProducts / 20);
  // const pageNumbers = [...Array(totalPages).keys()];
  useEffect(() => {
    fetch(
      `http://localhost:3000/toys?email=${user?.email}page=${currentPage}&limit=20`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));

    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth", // Use 'auto' for instant scrolling without smooth animation
    });
  }, [currentPage]);
  return <></>;
};

export default MyToys;

// {/* <div className="overflow-x-auto custom-container min-h-[calc(100vh-450px)]">
//   {/* <table className="table w-full">
//     {/* head */}
//     <thead>
//       <tr>
//         <th className="font-extrabold font-bruno">Seller</th>
//         <th className="font-extrabold font-bruno">Toy Name</th>
//         <th className="font-extrabold font-bruno">Sub-category</th>
//         <th className="font-extrabold font-bruno">Price</th>
//         <th className="font-extrabold font-bruno"></th>
//       </tr>
//     </thead>
//     {toys.length ? (
//       <tbody>
//         {toys.map((toy) => (
//           <ToysRow key={toy._id} toy={toy}></ToysRow>
//         ))}
//       </tbody>
//     ) : (
//       <tbody>
//         <tr>
//           <td colSpan="5" className="text-center"></td>
//         </tr>
//       </tbody>
//     )}
//   </table>
//   <div className="text-center">
//     {pageNumbers.map((number) => (
//       <button
//         key={number}
//         onClick={() => setCurrentPage(number)}
//         className={`py-1 px-3 border rounded-lg shadow-lg hover:bg-sky-300 font-spaceMono text-white ${
//           currentPage === number ? "bg-sky-200" : ""
//         }`}
//       >
//         {number + 1}
//       </button>
//     ))}
//   </div> */}
// </div> */}
