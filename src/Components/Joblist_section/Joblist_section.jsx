import { useEffect } from "react";
import { useState } from "react";
import map from '../../../public/assets/Map.png';
import location from "../../../public/assets/Vector.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const Joblist_section = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() =>{
        fetch("https://jobs-portal-server-iota.vercel.app/jobData")
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setJobs(data)
        })
    },[])


    return (
        <section className="py-10">
            <div className="max-w-[1140px] mx-auto ">
               <div className="">
                  <h2 className="text-[#000] font-semibold text-[28px] text-center mb-10">All Popular Listed jobs</h2>
                  {
                    jobs.map((job, index) => <div key={index} className="px-5 lg:py-2 py-5 mb-7 shadow-[10px_0px_50px_0px_rgba(0,0,0,0.10)]">
                        <div className="flex flex-col lg:flex-row items-center">
                            <div className="lg:w-[15%] w-full lg:mb-0 mb-5">
                               <img src={job.image} alt="" className="mx-auto" />
                            </div>
                                <div className="lg:w-[70%] w-full">
                                    <h4 className="text-[#5f5858] font-medium lg:text-left text-center">{job.company}</h4>
                                    <h5 className="font-semibold lg:text-[24px] text-[20px] lg:text-left text-center text-[#000] mb-2">{job.position} {job.Experience} Years</h5>
                                    <div className="flex flex-col lg:flex-row items-center lg:gap-0 gap-4">
                                        <div className="flex items-center">
                                            <img src={map} alt="" />
                                            <h5 className="text-[14px] text-[#000] font-normal ml-4">{job.Location}</h5>
                                        </div>
                                        <div className="flex items-center ml-5">
                                            <img src={location} alt="" />
                                            <h5 className="text-[14px] text-[#000] font-normal ml-4">{job.time}</h5>
                                        </div>
                                        <p className="text-[14px] text-[#000] font-normal ml-4">({job.Salary}) TK.</p>
                                    </div>
                                </div>
                                <div className="lg:w-[15%] w-full lg:mt-0 mt-7 text-center lg:text-left">
                                   <Link to={`/job_Details/${job._id}`}>
                                      <Button variant="contained" color="success">View Details</Button>
                                   </Link>
                                </div> 
                        </div>
                    </div> )
                  }
               </div>
            </div>
        </section>
    );
};

export default Joblist_section;