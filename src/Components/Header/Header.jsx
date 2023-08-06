import { Link } from "react-router-dom";
import { RxCross2 } from 'react-icons/rx';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import './Header.css'
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

const Header = () => {
    const { user, userLogOut } = useContext(AuthContext);
    const [toggle, setToggle] = useState(false);

    const LogOutForm = () =>{
        userLogOut()
        .then(() =>{
            Swal.fire({
                icon: 'success',
                title: 'Logout Successfully',
            })
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
                                user ? <Link to="/postJob"><Button variant="contained" color="success">Post a job</Button></Link> : <Link to="/register">Register</Link>
                            }  
                        </li>
                        {
                            user && <li><Link to="/jobList"><Button variant="contained" color="success">Job List</Button></Link></li>
                        }
                        <li>
                            {
                                user && <img src={user?.photoURL} alt="" className="header-img" />
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