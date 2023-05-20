import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import EditToys from "../Pages/EditToys/EditToys";
import Blogs from "../Pages/Blogs/Blogs";
import AddToy from "../Pages/AddToy/AddToy";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
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
      },
      {
        path: "/my-toys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/add-toys",
        element: <AddToy></AddToy>,
      },
      {
        path: "/edit-toys",
        element: <EditToys></EditToys>,
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
