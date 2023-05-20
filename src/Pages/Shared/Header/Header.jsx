import { Link, NavLink } from "react-router-dom";
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
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "link-active" : "link-deactive"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="mr-8 ">
        <NavLink
          to="/all-toys"
          className={({ isActive }) =>
            isActive ? "link-active" : "link-deactive"
          }
        >
          All Toys
        </NavLink>
      </li>
      <li className="mr-8 ">
        <NavLink
          to="/my-toys"
          className={({ isActive }) =>
            isActive ? "link-active" : "link-deactive"
          }
        >
          My Toys
        </NavLink>
      </li>
      <li className="mr-8 ">
        <NavLink
          to="/add-toys"
          className={({ isActive }) =>
            isActive ? "link-active" : "link-deactive"
          }
        >
          Add A Toy
        </NavLink>
      </li>
      <li className="mr-8 ">
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? "link-active" : "link-deactive"
          }
        >
          Blogs
        </NavLink>
      </li>
      <li className="mr-8 ">
        <NavLink
          to="/all"
          className="text-slate-400 px-4 py-3 hover:text-blue-500 font-semibold text-lg border hover:border-blue-500 transition delay-100 ease-in-out"
        >
          UserProfile
        </NavLink>
      </li>
    </>
  );
  return (
    <header className=" py-10 ">
      <nav className="custom-container flex justify-between items-end gap-6">
        <Link to="/" className="cursor-pointer flex gap-3 items-end">
          <img src={logo} alt="" className="h-16" />
          <h1 className="text-2xl font-bold  text-slate-500 font-bruno tracking-widest">
            <span className="text-sky-600 text-3xl">A</span>
            ction<span className="text-sky-600 text-3xl">Z</span>one
          </h1>
        </Link>

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
        className={`${
          navOpen ? "flex" : "hidden"
        } flex-col custom-container mt-8 bg-slate-50`}
        id="mobile-menu"
      >
        <nav>
          <ul className="flex flex-col gap-5 py-8">{navLink}</ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
