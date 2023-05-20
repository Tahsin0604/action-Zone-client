{
  /* <div className="relative">
          <input
            type="text"
            name=""
            id="search"
            onKeyDown={handleSearch}
            className="outline-0 py-3 pl-12 text-lg text-slate-400 w-80 rounded-2xl  bg-white border border-solid "
          />
          <label
            htmlFor="search"
            className="absolute top-5 left-0 px-4 text-slate-500"
          >
            <FaSearch></FaSearch>
          </label>
        </div> 
        const handleSearch = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const search = e.target.value;
      console.log(search);
    }
  };
        */
}
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ToysRow from "../ToysRow/ToysRow";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const { totalProducts } = useLoaderData();
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(totalProducts / 20);
  const pageNumbers = [...Array(totalPages).keys()];
  useEffect(() => {
    fetch(`http://localhost:3000/toys/All?page=${currentPage}&limit=20`)
      .then((res) => res.json())
      .then((data) => setToys(data));

    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth", // Use 'auto' for instant scrolling without smooth animation
    });
  }, [currentPage]);

  return (
    <div className="overflow-x-auto custom-container min-h-[calc(100vh-450px)]">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th className="font-extrabold font-bruno">Seller</th>
            <th className="font-extrabold font-bruno">Toy Name</th>
            <th className="font-extrabold font-bruno">Sub-category</th>
            <th className="font-extrabold font-bruno">Price</th>
            <th className="font-extrabold font-bruno"></th>
          </tr>
        </thead>
        {toys.length ? (
          <tbody>
            {toys.map((toy) => (
              <ToysRow key={toy._id} toy={toy}></ToysRow>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan="5" className="text-center"></td>
            </tr>
          </tbody>
        )}
      </table>
      <div className="text-center">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`py-1 px-3 border rounded-lg shadow-lg hover:bg-sky-300 font-spaceMono text-white ${
              currentPage === number ? "bg-sky-200" : ""
            }`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
