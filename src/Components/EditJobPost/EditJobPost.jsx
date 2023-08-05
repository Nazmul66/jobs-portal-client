import { useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const EditJobPost = () => {
    const navigate = useNavigate();
    const [update, setUpdate] = useState([]);
    const { id } = useParams();

     useEffect(() =>{
        fetch(`https://jobs-portal-server-iota.vercel.app/updateData/${id}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setUpdate(data);
        })
     },[id])

     const {_id, Experience, Experience_level, Job_Description, Location, Responsibility, Salary, Working, company, company_website, position, image, post_Date, qualification, time} = update;

    const handleUpdate = (event) =>{
        event.preventDefault();
        const form = event.target;
        const company_name = form.Company_Name.value;
        const company_website = form.Website_link.value;
        const company_logo = form.image.value;
        const location = form.location.value;
        const experience = form.experience.value;
        const qualification = form.qualification.value;
        const salary = form.salary.value;
        const Experience_level = form.Experience_level.value;
        const JobType = form.JobType.value;
        const jobTitle = form.jobTitle.value;
        const schedule = form.schedule.value;
        const deadline = form.date.value;
        const description = form.description.value;
        const responsibility = form.responsibility.value;
 
        const formData = {
           position         :  jobTitle,
           time             :  JobType,
           company          :  company_name,
           image            :  company_logo,
           qualification    :  qualification,
           Experience       :  experience,
           Location         :  location,
           post_Date        :  deadline,
           Salary           :  salary,
           Working          :  schedule,
           company_website  :  company_website,
           Experience_level :  Experience_level,
           Job_Description  :  description,
           Responsibility   :  responsibility
        }
        // console.log(formData);

        fetch(`https://jobs-portal-server-iota.vercel.app/updatePost/${_id}`,{
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
         })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    icon: 'success',
                    title: 'Update Successfully',
                  })
                  navigate("/");
            }
         })
    }


    return (
        <>
        <div className="text-center py-5 bg-[#F4F5F7]">
            <h2 className="font-medium text-[30px]">Update a Job</h2>
        </div>

        <section className="py-10 px-5">
            <div className="max-w-[1140px] mx-auto">
               <div className="border-[1px] border-[#D6D6D6] rounded-md lg:px-10 px-6 py-14">
                  <form  onSubmit={ handleUpdate }>
                     <div className="flex lg:flex-row flex-col items-center justify-between lg:gap-12 gap-4 mb-4">
                        <div className="mb-3 lg:w-[50%] w-full">
                            <label className="block font-medium text-[20px] mb-3">Company Name</label>
                            <input type="text" name="Company_Name" defaultValue={company} placeholder="Name" required className="w-full outline-none border-[1px] border-[#D6D6D6] rounded-md px-6 py-2" />
                        </div>
                        <div className="mb-3 lg:w-[50%] w-full">
                            <label className="block font-medium text-[20px] mb-3">Company Website</label>
                            <input type="text" name="Website_link" defaultValue={company_website} placeholder="Website Link" required className="w-full outline-none border-[1px] border-[#D6D6D6] rounded-md px-6 py-2" />
                        </div>
                     </div>

                     <div className="flex lg:flex-row flex-col items-center justify-between lg:gap-12 gap-4 mb-4">
                        <div className="mb-3 lg:w-[50%] w-full">
                            <label className="block font-medium text-[20px] mb-3">Company Logo</label>
                            <input type="text" name="image" defaultValue={image} placeholder="Image Url" required className="w-full outline-none border-[1px] border-[#D6D6D6] rounded-md px-6 py-2" />
                        </div>
                        <div className="mb-3 lg:w-[50%] w-full">
                            <label className="block font-medium text-[20px] mb-3">Job Location</label>
                            <input type="text" name="location" defaultValue={Location} placeholder="Location" required className="w-full outline-none border-[1px] border-[#D6D6D6] rounded-md px-6 py-2" />
                        </div>
                     </div>

                     <div className="flex lg:flex-row flex-col items-center justify-between lg:gap-12 gap-4 mb-4">
                        <div className="mb-3 lg:w-[50%] w-full">
                            <label className="block font-medium text-[20px] mb-3">Experience</label>
                            <input type="text" name="experience" defaultValue={Experience} placeholder="Experience" required className="w-full outline-none border-[1px] border-[#D6D6D6] rounded-md px-6 py-2" />
                        </div>
                        <div className="mb-3 lg:w-[50%] w-full">
                            <label className="block font-medium text-[20px] mb-3">Qualification</label>
                            {/* <input type="text" name="qualification" placeholder="Qualification" className="w-full outline-none border-[1px] border-[#D6D6D6] rounded-md px-6 py-2" /> */}
                            <div className="selects">
                                    <select name="qualification" defaultValue={qualification} required className="border-[1px] px-5 py-2 w-full mr-5 outline-none appearance-none">
                                        <option value="" disabled>Select an option</option>
                                        <option value="C.S.E">C.S.E</option>
                                        <option value="B.S.C">B.S.C</option>
                                        <option value="Bachelor">Bachelor</option>
                                        <option value="EEE">EEE</option>
                                        <option value="Any">Any</option>
                                    </select>
                                    <IoIosArrowDown className="arrow" />
                                </div>
                        </div>
                     </div>

                     <div className="flex lg:flex-row flex-col items-center justify-between lg:gap-12 gap-4 mb-4">
                        <div className="mb-3 lg:w-[50%] w-full">
                            <label className="block font-medium text-[20px] mb-3">Salary</label>
                            <input type="text" name="salary" defaultValue={Salary} placeholder="Salary" required className="w-full outline-none border-[1px] border-[#D6D6D6] rounded-md px-6 py-2" />
                        </div>
                        <div className="mb-3 lg:w-[50%] w-full">
                            <label className="block font-medium text-[20px] mb-3">Experience Level</label>
                            <div className="selects">
                                <select name="Experience_level" defaultValue={Experience_level} required className="border-[1px] px-5 py-2 w-full mr-5 outline-none appearance-none">
                                    <option value="" disabled>Select an option</option>
                                    <option value="Entry Level">Entry Level</option>
                                    <option value="Mid Level">Mid Level</option>
                                    <option value="Senior Level">Senior Level</option>
                                </select>
                                <IoIosArrowDown className="arrow" />
                              </div>
                        </div>
                     </div>

                     <div className="flex lg:flex-row flex-col items-center justify-between lg:gap-12 gap-4 mb-4">
                        <div className="mb-3 lg:w-[50%] w-full">
                            <label className="block font-medium text-[20px] mb-3">Job Type</label>
                              <div className="selects">
                                <select name="JobType" defaultValue={time} required className="border-[1px] px-5 py-2 w-full mr-5 outline-none appearance-none">
                                    <option value="" disabled>Select an option</option>
                                    <option value="Full Time">Full Time</option>
                                    <option value="Part Time">Part Time</option>
                                    <option value="Temporary">Temporary</option>
                                    <option value="Contract">Contract</option>
                                </select>
                                <IoIosArrowDown className="arrow" />
                              </div>
                        </div>

                        <div className="mb-3 lg:w-[50%] w-full">
                            <label className="block font-medium text-[20px] mb-3">Job Title</label>
                              <div className="selects">
                                <select name="jobTitle" defaultValue={position} required className="border-[1px] px-5 py-2 w-full mr-5 outline-none appearance-none">
                                    <option value="" disabled>Select an option</option>
                                    <option value="Frontend Development">Frontend-Development</option>
                                    <option value="PHP & Laravel">PHP & Laravel</option>
                                    <option value="Backend Development">Backend Development</option>
                                    <option value="Ui/UX Design">Ui/UX Design</option>
                                    <option value="Motion Graphics">Motion Graphics</option>
                                    <option value="React Js">React Js</option>
                                    <option value="Mern Stack Development">Mern Stack Development</option>
                                </select>
                                <IoIosArrowDown className="arrow" />
                              </div>
                        </div>
                     </div>

                     <div className="flex lg:flex-row flex-col items-center justify-between lg:gap-12 gap-4 mb-4">
                        <div className="mb-3 lg:w-[50%] w-full">
                                <label className="block font-medium text-[20px] mb-3">Schedule</label>
                                <div className="selects">
                                    <select name="schedule" defaultValue={Working} required className="border-[1px] px-5 py-2 w-full mr-5 outline-none appearance-none">
                                        <option value="" disabled>Select an option</option>
                                        <option value="Monday To Friday ( Saturday & Sunday off )">Monday To Friday ( Saturday & Sunday off )</option>
                                        <option value="Monday To Saturday ( Sunday off )">Monday To Saturday ( Sunday off )</option>
                                        <option value="Sunday To Friday ( Saturday off )">Sunday To Friday ( Saturday off )</option>
                                    </select>
                                    <IoIosArrowDown className="arrow" />
                                </div>
                            </div>

                            <div className="mb-3 lg:w-[50%] w-full">
                                <label className="block font-medium text-[20px] mb-3">Application Deadline</label>
                                <input type="text" name="date" defaultValue={post_Date} placeholder="Job Application Post Date" required className="w-full outline-none border-[1px] border-[#D6D6D6] rounded-md px-6 py-2" />
                            </div>
                     </div>

                       <div className="mb-3 ">
                            <label className="block font-medium text-[20px] mb-3">Job Description</label>
                            <textarea name="description" defaultValue={Job_Description} placeholder="Job Description" required className="w-full outline-none border-[1px] border-[#D6D6D6] rounded-md px-6 py-5 h-[270px]"></textarea>
                        </div>

                        <div className="mb-3 ">
                            <label className="block font-medium text-[20px] mb-3">Responsibility</label>
                            <textarea name="responsibility" defaultValue={Responsibility} placeholder="Responsibility" required className="w-full outline-none border-[1px] border-[#D6D6D6] rounded-md px-6 py-5 h-[270px]"></textarea>
                        </div>

                        <div className='text-center mt-5'>
                          <button className='bg-[#338573] text-[#FFF] px-10 py-3 rounded-md font-semibold'>Edit job</button>
                        </div>

                  </form>
               </div>
            </div>
        </section>
        </>
    );
};

export default EditJobPost;