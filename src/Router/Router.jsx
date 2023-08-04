import { createBrowserRouter } from "react-router-dom";
import Main from "../MainPage/MAin";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";

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
            path: '/about',
            element: <PrivateRoutes><About></About></PrivateRoutes>
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