import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import Swal from "sweetalert2";

const Login = () => {
    const { signInUser, googleInUser } = useContext(AuthContext);
    // const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();
    const [error, setError] = useState("");

    // const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) =>{
       event.preventDefault();
       const email = event.target.email.value;
       const pass = event.target.password.value;
    //    console.log(email, pass)

       if(email === "" || pass === ""){
            return setError("!!! Please fill Up Empty Form Box !!!");
       }
       setError("");

       signInUser(email, pass)
       .then(result =>{
           const user = result.user;
           const userInfo = {
              email : user?.email
           }
           console.log(user)
        //    navigate(from, { replace : true });

            fetch("https://jobs-portal-server-iota.vercel.app/userData",{
                method: "POST",
                headers: {
                    "content-type" : "application/json"
                },
                body: JSON.stringify(userInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

            Swal.fire({
                icon: 'success',
                title: 'Login Successfully',
            })
           navigate("/")
       })
       .catch(error =>{
          console.log(error.message)
          setError(error.message)
       })
    }

    const googleSignIn = () =>{
        googleInUser()
        .then(result =>{
            const user = result.user;
            const userInfo = {
                name : user?.displayName || "unknown name",
                email : user?.email || "unknown@BiLogoGmail.com",
                image : user?.photoURL
            }
            console.log(user);
            Swal.fire({
                icon: 'success',
                title: 'Login Successfully',
              })

            fetch(`https://jobs-portal-server-iota.vercel.app/userData`,{
                method: "POST",
                headers: {
                    "content-type" : "application/json"
                },
                body: JSON.stringify(userInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

            navigate("/")
        })
        .catch(error =>{
            console.log(error.message)
            setError(error.message)
        })
    }
    
    return (
        <>
        <div className="text-center py-5 bg-[#F4F5F7]">
           <h2 className="font-medium text-[30px]">Login</h2>
        </div>

        <div className="lg:py-20 py-10 px-5">
            <div className="max-w-[500px] mx-auto">
              <div className="border-[1px] border-[#D6D6D6] rounded-md lg:px-10 px-6 py-14"> 
                 <form onSubmit={ handleLogin }>
                    <div className="mb-3">
                        <label htmlFor="" className="block font-medium text-[20px] mb-3">Email Address</label>
                        <input type="email" name="email" placeholder="Email *" className="w-full outline-none border-[1px] border-[#D6D6D6] rounded-md px-6 py-2" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="" className="block font-medium text-[20px] mb-3">Password</label>
                        <input type="password" name="password" placeholder="Password *" className="w-full outline-none border-[1px] border-[#D6D6D6] rounded-md px-6 py-2" />
                        {
                            error && <p className="text-center text-red-500 mt-4 font-medium">{error}</p>
                        }
                    </div>
                    <div className="mb-5">
                        <button className="rounded-[4px] w-full bg-[#338573] text-[#FFF] py-3">Login</button>
                    </div>
                     <p className="text-center font-medium text-[#000]">Create new account ?<Link to="/register" className="font-semibold text-[#000]"> Click Here</Link></p>

                     <div className="mt-5 flex items-center justify-center bg-[#FFF] shadow-[0_0px_20px_0px_rgba(0,0,0,0.2)] py-2 rounded-md cursor-pointer" onClick={ googleSignIn }>
                        <FcGoogle className="text-[30px]" />
                        <span className="text-[#000] font-medium ml-3">Sign in With Google</span>
                     </div>
                 </form>
               </div>
            </div>
        </div>
    </>
    );
};

export default Login;