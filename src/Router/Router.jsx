import { createBrowserRouter } from "react-router-dom";
import Main from "../MainPage/MAin";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Home from "../Pages/Home/Home";
import Job_Details from "../Components/Job_Details/Job_Details";

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
            element: <Job_Details></Job_Details>
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