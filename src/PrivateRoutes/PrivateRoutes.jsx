import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader/Loader";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location)

    if(loading){
       return <Loader></Loader>
    }
    else if(user){
        return children;
    }

    return <Navigate to="/login" state = {{ from: location }} replace ></Navigate>
};

export default PrivateRoutes;