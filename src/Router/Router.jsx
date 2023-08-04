import { createBrowserRouter } from "react-router-dom";
import Main from "../MainPage/MAin";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Home from "../Pages/Home/Home";
import Job_Details from "../Components/Job_Details/Job_Details";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import PostJob from "../Components/PostJob/PostJob";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <div>hello world</div>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/job_Details/:id',
            element: <PrivateRoutes><Job_Details></Job_Details></PrivateRoutes>
         },
         {
            path: "/postJob",
            element: <PrivateRoutes><PostJob></PostJob></PrivateRoutes>
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         }
      ]
    },

  ]);

export default router;