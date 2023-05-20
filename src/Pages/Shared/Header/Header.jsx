import { Link } from "react-router-dom";
import logo from "../../../assets/ActionZone.png";
import { FaSearch, FaBars } from "react-icons/fa";
import { useState } from "react";
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const search = e.target.value;
      console.log(search);
    }
  };
  const navLink = (
    <>
      <li className="mr-8 ">
        <Link
          to="/"
          className="text-slate-400 px-4 py-3 hover:text-blue-500 font-semibold text-lg border hover:border-blue-500 transition delay-100 ease-in-out"
        >
          Home
        </Link>

        <Link
          to="details.html"
          className="text-slate-400 px-2 py-3 hover:text-blue-500 font-semibold text-lg border hover:border-blue-500 transition delay-100 ease-in-out"
        >
          Course
        </Link>
      </li>
      <li>
        <div className="relative">
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
      </li>
      <li>
        <button className="text-white bg-sky-400 hover:bg-sky-500 drop-shadow-2xl rounded-3xl px-9 py-4 delay-100 transition-colors ease-in-out font-semibold">
          Contact us
        </button>
      </li>
    </>
  );
  return (
    <header className=" custom-container py-10 ">
      <nav className="flex justify-between items-end gap-6">
        <a href="/" className="cursor-pointer flex gap-3 items-end">
          <img src={logo} alt="" className="h-16" />
          <h1 className="text-2xl font-bold  text-slate-500 font-bruno tracking-widest">
            <span className="text-sky-600 text-3xl">A</span>
            ction<span className="text-sky-600 text-3xl">Z</span>one
          </h1>
        </a>

        <div className="hidden lg:flex items-end gap-8">
          <nav>
            <ul className="flex flex-row justify-center items-center">
              {navLink}
            </ul>
          </nav>
        </div>

        <button
          className="px-2 py-1 border border-solid rounded-lg lg:hidden"
          onClick={() => setNavOpen(!navOpen)}
        >
          <FaBars className="fa-solid fa-bars text-lg"></FaBars>
        </button>
      </nav>

      <div
        className={`${navOpen ? "flex" : "hidden"} flex-col mt-8 gap-8`}
        id="mobile-menu"
      >
        <nav>
          <ul className="flex flex-col gap-5">{navLink}</ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
