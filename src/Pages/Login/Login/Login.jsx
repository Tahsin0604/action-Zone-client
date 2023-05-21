import { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../../assets/img/login/login.jpg";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";

const Login = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const { loginUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || location.state?.from || "/";
  const navigate = useNavigate();

  //form submit
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((err) => setError(err.message));
  };

  // google button handler
  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };

  // github button handler
  const handleGithub = () => {
    githubSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="custom-container py-16">
      <h1
        className="section-title mb-8"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        Login now!
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-6">
        <div
          className="w-full md:w-1/2"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="200"
        >
          <img src={login} alt="" className="h-96 md:h-fit w-full rounded-lg" />
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-1/2">
          <div
            className="w-full"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            <form onSubmit={handleForm} className="max-w-lg space-y-5 mx-auto">
              {/* email */}
              <div className="flex flex-col space-y-2">
                <label>
                  <span className=" font-spaceMono">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  className="w-full outline-0 rounded border border-slate-600 text-lg px-5 py-2 text-slate-500 shadow-md "
                />
              </div>

              {/* password */}
              <div className="flex flex-col space-y-2">
                <label>
                  <span className=" font-spaceMono">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  className="w-full outline-0 rounded border border-slate-600 text-lg px-5 py-2 text-slate-500 shadow-md "
                />
                <label>
                  <p className="font-spaceMono text-slate-600">
                    <small>
                      Don't have an account?
                      <Link
                        to="/register"
                        state={{ from: from }}
                        replace
                        className="ml-3 font-bold hover:text-sky-500 hover:underline underline-offset-4 duration-200 transition-colors ease-in-out"
                      >
                        Register
                      </Link>
                    </small>
                  </p>
                </label>
              </div>
              <div className="w-full">
                <button className="button-secondary w-full">Login</button>
              </div>
              <label>
                <p className="font-spaceMono text-red-600 my-4">{error}</p>
              </label>
            </form>
          </div>
          <div
            className="divider font-spaceMono"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            OR
          </div>
          <div
            className="w-full flex justify-center items-center bg-sky-300 py-8 rounded-lg space-x-4"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            <button
              onClick={handleGoogle}
              className="p-4  rounded-full border border-solid shadow-xl shadow-slate-300 font-semibold tracking-wider text-slate-900 bg-white hover:-translate-y-1 transition-all duration-200 ease-in-out"
            >
              <FaGoogle className="text-xl"></FaGoogle>
            </button>
            <button
              onClick={handleGithub}
              className="p-4  rounded-full border border-solid shadow-xl shadow-slate-300 font-semibold tracking-wider text-slate-900 bg-white hover:-translate-y-1 transition-all duration-200 ease-in-out"
            >
              <FaGithub className="text-xl"></FaGithub>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
