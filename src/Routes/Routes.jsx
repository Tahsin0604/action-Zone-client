import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/AllToys/AllToys/AllToys";

import EditToys from "../Pages/EditToys/EditToys";
import Blogs from "../Pages/Blogs/Blogs";
import AddToy from "../Pages/AddToy/AddToy";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import MyToys from "../Pages/MyToys/MyToys/MyToys";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:3000/total-products"),
      },
      {
        path: "/my-toys",
        element: (
          <PrivateRoutes>
            <MyToys></MyToys>
          </PrivateRoutes>
        ),
      },
      {
        path: "/add-toys",
        element: (
          <PrivateRoutes>
            <AddToy></AddToy>
          </PrivateRoutes>
        ),
      },
      {
        path: "/edit-toys",
        element: (
          <PrivateRoutes>
            <EditToys></EditToys>
          </PrivateRoutes>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
