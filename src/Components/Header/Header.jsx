import { Link } from "react-router-dom";
import { RxCross2 } from 'react-icons/rx';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import './Header.css'
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Button } from "@mui/material";

const Header = () => {
    const { user, userLogOut } = useContext(AuthContext);
    const [toggle, setToggle] = useState(false);

    const LogOutForm = () =>{
        userLogOut()
        .then(() =>{
            // console.log("SignOut Successfully")
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    return (
        <header className="py-5 lg:px-0 px-5">
            <div className="max-w-[1140px] mx-auto flex justify-between items-center">
                <Link to="/"><h5>JobsPortal</h5></Link>
                <nav className={`${toggle ? "nav active" : "nav"}`}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            {
                                user ?  <button onClick={ LogOutForm }>Logout</button> :  <Link to="/login">Login</Link>
                            }  
                        </li>
                        <li>
                            {
                                user ?  <Button variant="contained" color="success">Post a job</Button> :  <Link to="/register">Register</Link>
                            }  
                            
                        </li>
                    </ul>
                </nav>
                {
                    toggle ? <RxCross2 className="text-[30px] text-[#338573] lg:hidden block" onClick={() => setToggle(!toggle)} /> :
                    <HiOutlineMenuAlt3 className="text-[30px] text-[#338573] lg:hidden block" onClick={() => setToggle(!toggle)} />
                }
               
                
            </div>
        </header>
    );
};

export default Header;