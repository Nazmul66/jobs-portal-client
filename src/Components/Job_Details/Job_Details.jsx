import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Job_Details = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const [jobs, setJobs] = useState({});
    const { id } = useParams();

    useEffect(() =>{
        fetch(`http://localhost:4000/jobData/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setJobs(data)
        })
    },[id])

    const { _id, company_website, qualification, Experience, Location, post_Date, Salary, Job_Description, Responsibility, position, time, company, Experience_level} = jobs;
    // console.log(Responsibility);

    const applyJob = () =>{
        const applyData = {
            Title: position,
            job_type: time,
            Post_Date: post_Date,
            Experience,
            jobId : _id,
            Email : user?.email || "Unknown@gmail.com"
        }
        fetch(`http://localhost:4000/jobApply`,{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(applyData) 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                navigate('/jobList');
              }
        })
    }

    return (
        <>
            <div className="text-center py-5 bg-[#F4F5F7]">
                <h2 className="font-medium text-[20px]">
                    {position}({time}) - {company}
                </h2>
            </div>

            <div className="py-10 px-5">
                <div className="max-w-[1140px] mx-auto">
                        <div className="flex items-center justify-center mb-5">
                            <a href={`${company_website}`}>
                               <Button variant="outlined" color="success" size="large">View Company</Button>
                            </a>
                            <div className="ml-5">
                                <Button variant="contained" color="success" size="large" onClick={ applyJob }>Apply This Job</Button>
                            </div>
                        </div>

                    <div className="mb-10">
                       <h3 className="text-[20px] font-semibold text-[#000] mb-4">Minimum Qualification: <span className="text-[16px] font-normal text-[#000] ">{qualification} Background</span> </h3>
                       <h3 className="text-[20px] font-semibold text-[#000] mb-4">Experience Level: <span className="text-[16px] font-normal text-[#000]">{Experience_level}</span></h3>
                       <h3 className="text-[20px] font-semibold text-[#000] mb-4">Experience Length: <span className="text-[16px] font-normal text-[#000]">{Experience} Years</span></h3>
                       <h3 className="text-[20px] font-semibold text-[#000] mb-4">Location: <span className="text-[16px] font-normal text-[#000] ">{Location}</span></h3>
                       <h3 className="text-[20px] font-semibold text-[#000] mb-4">Application Post Date: <span className="text-[16px] font-normal text-[#000] ">{post_Date}</span></h3>
                       <h3 className="text-[20px] font-semibold text-[#000] mb-4">Salary Range: <span className="text-[16px] font-normal text-[#000] ">({Salary}) TK.</span></h3>
                    </div>

                    <div className="mb-10">
                        <h4 className="text-[24px] font-bold mb-6">Job description</h4>
                        <p className="leading-[32px]">{Job_Description}</p>
                    </div>

                    <div className="">
                        <h4 className="text-[24px] font-bold mb-6">{position} Requirements:</h4>
                         <p className="leading-[32px]">{Responsibility}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Job_Details;