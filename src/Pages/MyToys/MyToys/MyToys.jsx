import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { set } from "lodash";
import MyToysRow from "../MyToysRow/MyToysRow";
import { FaSearch } from "react-icons/fa";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [pagination, setPagination] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:3000/total-products/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.totalProducts) {
          console.log(data);
          const value = data.totalProducts;
          setTotalProducts(value);
        }
      });
  }, []);

  const totalPages = Math.ceil(totalProducts / 20);
  const pageNumbers = [...Array(totalPages).keys()];
  useEffect(() => {
    fetch(
      `http://localhost:3000/toys?email=${user?.email}&page=${currentPage}&limit=20&sort=${sort}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));

    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth", // Use 'auto' for instant scrolling without smooth animation
    });
  }, [currentPage, sort]);

  const updateToyList = (id) => {
    const remaining = toys.filter((toy) => toy._id !== id);
    setToys(remaining);
  };

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const search = e.target.value;
      fetch(`http://localhost:3000/toySearchByName/${search}`)
        .then((res) => res.json())
        .then((data) => setToys(data));
      setPagination(false);
    }
  };

  const handleSelect = (e) => {
    const options = e.target.value;
    const sortOperation = options.split(" ")[0].toLowerCase();
    console.log(sortOperation);
    setSort(sortOperation);
    setCurrentPage(0);
    setPagination(true);
  };
  return (
    <div
      className="custom-container min-h-[calc(100vh-500px)]"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="200"
    >
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 my-4">
        <div className="relative ">
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
        <div>
          <select
            className="w-full outline-0 rounded border border-slate-600 text-lg px-5 py-2 text-slate-500 shadow-md "
            name="category"
            onChange={handleSelect}
          >
            <option>Default</option>
            <option>Asc ($ Price)</option>
            <option>Desc ($ Price)</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="font-extrabold font-bruno">Toy Name</th>
              <th className="font-extrabold font-bruno">Sub-category</th>
              <th className="font-extrabold font-bruno">Price</th>
              <th className="font-extrabold font-bruno">Rating</th>
              <th className="font-extrabold font-bruno">Available Quantity</th>
              <th className="font-extrabold font-bruno">Action</th>
            </tr>
          </thead>
          {toys.length ? (
            <tbody>
              {toys.map((toy) => (
                <MyToysRow
                  key={toy._id}
                  toy={toy}
                  updateToyList={updateToyList}
                ></MyToysRow>
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
        {pagination && (
          <div className="text-center">
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => setCurrentPage(number)}
                className={`py-1 px-3 border rounded-lg shadow-lg hover:bg-sky-300 font-spaceMono  ${
                  currentPage === number
                    ? "bg-sky-200 text-white"
                    : " text-slate-600"
                }`}
              >
                {number + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyToys;
