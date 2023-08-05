import { createBrowserRouter } from "react-router-dom";
import Main from "../MainPage/MAin";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Home from "../Pages/Home/Home";
import Job_Details from "../Components/Job_Details/Job_Details";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import PostJob from "../Components/PostJob/PostJob";
import JobList from "../Components/JobList/JobList";
import EditJobPost from "../Components/EditJobPost/EditJobPost";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: '/',
            element: <PrivateRoutes><Home></Home></PrivateRoutes>
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
            path: "/jobList",
            element: <PrivateRoutes><JobList></JobList></PrivateRoutes>
         },
         {
            path: "updatePost/:id",
            element: <PrivateRoutes><EditJobPost></EditJobPost></PrivateRoutes>
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