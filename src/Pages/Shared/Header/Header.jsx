import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/ActionZone.png";
import { FaSearch, FaBars, FaRegUserCircle } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const [navOpen, setNavOpen] = useState(false);
  const handleLogout = () => {
    logOut()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setNavOpen(false);
  }, [location.pathname]);
  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "link-active" : "link-deactive"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-toys"
          className={({ isActive }) =>
            isActive ? "link-active" : "link-deactive"
          }
        >
          All Toys
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/my-toys"
            className={({ isActive }) =>
              isActive ? "link-active" : "link-deactive"
            }
          >
            My Toys
          </NavLink>
        </li>
      )}

      {user && (
        <li>
          <NavLink
            to="/add-toys"
            className={({ isActive }) =>
              isActive ? "link-active" : "link-deactive"
            }
          >
            Add A Toy
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? "link-active" : "link-deactive"
          }
        >
          Blogs
        </NavLink>
      </li>
      {user ? (
        user.photoURL ? (
          <li className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <div
              className="tooltip  tooltip-right"
              data-tip={user?.displayName}
            >
              <img
                src={user.photoURL}
                alt=""
                className="h-12 w-12 rounded-full cursor-pointer"
              />
            </div>
            <button onClick={handleLogout} className="login-button">
              Logout
            </button>
          </li>
        ) : (
          <li className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="tooltip tooltip-right" data-tip={user?.displayName}>
              <FaRegUserCircle className="h-12 w-12 rounded-full cursor-pointer"></FaRegUserCircle>
            </div>
            <button onClick={handleLogout} className="login-button">
              Logout
            </button>
          </li>
        )
      ) : (
        <li className="flex">
          <Link
            to="login"
            state={{ from: location }}
            replace
            className="login-button"
          >
            Login
          </Link>
        </li>
      )}
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
            <ul className="flex flex-row justify-center items-center space-x-6">
              {navLink}
            </ul>
          </nav>
        </div>

        <button
          className="nav-button lg:hidden"
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
