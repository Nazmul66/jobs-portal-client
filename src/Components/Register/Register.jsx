import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";


const Register = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleRegister = (event) =>{
      event.preventDefault();
      const name = event.target.username.value;
      const email = event.target.email.value;
      const image = event.target.image.value;
      const pass = event.target.password.value;
      const formData = { name, email, pass}
      console.log(formData)

      if(name === "" || email === "" || image === "" || pass === "" ){
          return setError("!!! Please fill Up Empty Form Box !!!");
       }
       else if(pass.length < 6){
          return setError("!!! AtLeast use 6 Character Password !!!");
       }
       else if(!/(?=.*?[A-Z])/.test(pass)){
           return setError("!!! AtLeast use One UpperCase !!!");
       }
       else if(!/(?=.*[0-9])/.test(pass)){
        return setError("!!! AtLeast use One Number !!!");
      }
       else if(!/(?=.*[$@$!%*?&./])/.test(pass)){
          return setError("!!! AtLeast use One Special Character !!!");
      }

      setError("");

      createUser(email, pass)
      .then( result =>{
          const users = result.user;
          console.log(users)
          updateProfile(result.user, {
            displayName: name,
            photoURL : image,
          })
          .then(() =>{
            const userInfo = {
                 name : name || "unknown name" ,
                 email : email,
                 image : image
              }
                Swal.fire({
                icon: 'success',
                title: 'Register Successfully',
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

                navigate("/login")
          })

        })

      .catch(error =>{
        console.log(error.message)
        setError(error.message)
      })
       
    }
    
    return (
        <>
            <div className="text-center py-5 bg-[#F4F5F7]">
               <h2 className="font-medium text-[30px]">Register</h2>
            </div>

            <div className="lg:py-20 py-10 px-5">
                <div className="max-w-[500px] mx-auto">
                  <div className="border-[1px] border-[#D6D6D6] rounded-md lg:px-10 px-6 py-14"> 
                     <form onSubmit={ handleRegister }>
                       <div className="mb-3">
                            <label htmlFor="" className="block font-medium text-[20px] mb-3">Username</label>
                            <input type="text" name="username" placeholder="Username *" className="w-full outline-none border-[1px] border-[#D6D6D6] rounded-md px-6 py-2" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="block font-medium text-[20px] mb-3">Email Address</label>
                            <input type="email" name="email" placeholder="Email *" className="w-full outline-none border-[1px] border-[#D6D6D6] rounded-md px-6 py-2" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="block font-medium text-[20px] mb-3">Image </label>
                            <input type="text" name="image" placeholder="Image URL *" className="w-full outline-none border-[1px] border-[#D6D6D6] rounded-md px-6 py-2" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="" className="block font-medium text-[20px] mb-3">Password</label>
                            <input type="password" name="password" placeholder="Password *" className="w-full outline-none border-[1px] border-[#D6D6D6] rounded-md px-6 py-2" />
                            {
                                error && <p className="text-center text-red-500 mt-4 font-medium">{error}</p>
                            }
                        </div>
                        <div className="mb-5">
                            <button className="rounded-[4px] w-full bg-[#338573] text-[#FFF] py-3">Create Account</button>
                        </div>
                         <p className="text-center font-medium text-[#000]">Already create an account? <Link to="/login" className="font-semibold text-[#000]">Please Login</Link></p>
                     </form>
                   </div>
                </div>
            </div>
        </>

    );
};

export default Register;